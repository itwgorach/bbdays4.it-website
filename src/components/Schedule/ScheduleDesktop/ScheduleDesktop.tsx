import { Hours, ScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'
import cx from 'classnames'

import ScheduleEventDesktop from './ScheduleEventDesktop'

const areArraysEqual = (
  arr1: GatsbyTypes.Maybe<GatsbyTypes.STRAPI_EVENT>[],
  arr2: GatsbyTypes.Maybe<GatsbyTypes.STRAPI_EVENT>[],
): boolean => {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
      return false
    }
  }
  return true
}

const removeDuplicatedChildArrays = (
  parentArray: GatsbyTypes.Maybe<GatsbyTypes.STRAPI_EVENT>[][],
): GatsbyTypes.Maybe<GatsbyTypes.STRAPI_EVENT>[][] => {
  const uniqueChildArrays: GatsbyTypes.Maybe<GatsbyTypes.STRAPI_EVENT>[][] = []

  for (const childArray of parentArray) {
    if (!uniqueChildArrays.some((arr) => areArraysEqual(arr, childArray))) {
      uniqueChildArrays.push(childArray)
    }
  }

  return uniqueChildArrays
}

const ScheduleDesktop: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  const getHourAndMinutesFromString = (hour: string) => {
    const [hourNumber, minutesNumber] = hour.split(':')
    return { hour: parseInt(hourNumber), minutes: parseInt(minutesNumber) }
  }

  const eventsContent = events?.length
    ? events.map((event) => {
        return events.filter((e) => {
          const { hour: eventStartHour } = getHourAndMinutesFromString(event.startHour)
          const { hour: eStartHour } = getHourAndMinutesFromString(e.startHour)
          const { hour: eventEndHour } = getHourAndMinutesFromString(event.endHour)
          const { hour: eEndHour } = getHourAndMinutesFromString(e.endHour)

          return (
            ((eventStartHour >= eStartHour && eventStartHour <= eEndHour) ||
              (eventEndHour >= eStartHour && eventEndHour <= eEndHour)) &&
            event.date === e.date
          )
        })
      })
    : []

  const uniqueEventsContent = removeDuplicatedChildArrays(eventsContent)

  const getEarlierHour = (event) => {
    return event.reduce((a, b) => {
      const { hour: aStartHour, minutes: aStartMinutes } = getHourAndMinutesFromString(a.startHour)
      const { hour: bStartHour, minutes: bStartMinutes } = getHourAndMinutesFromString(b.startHour)

      if (aStartHour !== bStartHour) {
        return aStartHour === Math.min(aStartHour, bStartHour) ? a : b
      }

      return aStartMinutes === Math.min(aStartMinutes, bStartMinutes) ? a : b
    })
  }

  const getLaterHour = (event) => {
    return event.reduce((a, b) => {
      const { hour: aEndHour, minutes: aEndMinutes } = getHourAndMinutesFromString(a.endHour)
      const { hour: bEndHour, minutes: bEndMinutes } = getHourAndMinutesFromString(b.endHour)

      if (aEndHour !== bEndHour) {
        return aEndHour === Math.max(aEndHour, bEndHour) ? a : b
      }

      return aEndMinutes === Math.max(aEndMinutes, bEndMinutes) ? a : b
    })
  }

  const getGridPlaceholders = (x: number) => {
    return Array.from({ length: 11 }, (_, y) => {
      const noLeftLine = x === 0 || x % 2 !== 0

      const placeholderClasses = cx('schedule-desktop__grid-placeholder', {
        '-no-left-line': noLeftLine,
      })

      return <div className={placeholderClasses} style={{ gridColumn: x + 2, gridRow: y + 2 }} />
    })
  }

  return (
    <div className="schedule-desktop">
      <h1 className="schedule-desktop__header">{scheduleTitle}</h1>
      <div className="schedule-desktop__grid">
        <div className="schedule-desktop__grid-hours">
          {Hours.map((hour) => (
            <div key={hour} className="schedule-desktop__grid-hour">
              {hour}
            </div>
          ))}
        </div>
        <div className="schedule-desktop__grid-days">
          {ScheduleWeek.map(({ dayDesktop, dateDesktop }) => (
            <div key={dateDesktop} className="schedule-desktop__grid-date">
              {dateDesktop}
              <div className="schedule-desktop__grid-date-day">{dayDesktop}</div>
            </div>
          ))}
        </div>
        {uniqueEventsContent?.length > 0 &&
          uniqueEventsContent.map((eventDay) => {
            const earlierStartHour = getEarlierHour(eventDay)
            const laterEndHour = getLaterHour(eventDay)

            const { hour: earlierStartHourNumber, minutes: earlierStartMinutesNumber } = getHourAndMinutesFromString(
              earlierStartHour.startHour,
            )

            const { hour: laterEndHourNumber, minutes: laterEndMinutesNumber } = getHourAndMinutesFromString(
              laterEndHour.endHour,
            )

            const startHourIndex = Hours.findIndex((hour) => parseInt(hour.split(':')[0]) === earlierStartHourNumber)
            const startGridColumn = (startHourIndex === -1 ? Hours.length * 2 : startHourIndex * 2) + 2

            const endHourIndex = Hours.findIndex((hour) => parseInt(hour.split(':')[0]) === laterEndHourNumber)
            const endGridColumn = (endHourIndex === -1 ? Hours.length * 2 : endHourIndex * 2) + 2

            const gridRow = ScheduleWeek.findIndex((day) => day.dateDesktop === eventDay[0].date) + 2

            const startGridColumnWithMinutes = earlierStartMinutesNumber > 0 ? startGridColumn + 1 : startGridColumn
            const endGridColumnWithMinutes = laterEndMinutesNumber > 0 ? endGridColumn + 1 : endGridColumn

            const gridColumnNumber = endGridColumnWithMinutes - startGridColumnWithMinutes

            const eventDaySorted = eventDay.sort((a, b) => {
              const { hour: aStartHour, minutes: aStartMinutes } = getHourAndMinutesFromString(a.startHour)
              const { hour: bStartHour, minutes: bStartMinutes } = getHourAndMinutesFromString(b.startHour)

              if (aStartHour !== bStartHour) {
                return aStartHour - bStartHour
              }

              return aStartMinutes - bStartMinutes
            })

            const isConcurrent = eventDaySorted.length > 1

            return (
              <div
                key={uniqueEventsContent.indexOf(eventDaySorted)}
                className="schedule-desktop__grid-events"
                style={{
                  gridColumn: `${startGridColumnWithMinutes} / ${endGridColumnWithMinutes}`,
                  gridRow: gridRow,
                  ...(isConcurrent && {
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridColumnNumber}, 1fr)`,
                  }),
                }}>
                {eventDaySorted.map((event) => {
                  return (
                    <ScheduleEventDesktop
                      key={event?.id}
                      event={event}
                      gridColumnNumber={gridColumnNumber}
                      isConcurrent={isConcurrent}
                      startParentGridColumn={startGridColumnWithMinutes}
                    />
                  )
                })}
              </div>
            )
          })}
        {Array.from({ length: 28 }, (_, x) => getGridPlaceholders(x))}
      </div>
    </div>
  )
}

export default ScheduleDesktop
