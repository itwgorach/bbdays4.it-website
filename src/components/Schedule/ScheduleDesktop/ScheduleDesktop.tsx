import { Hours, ScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'
import cx from 'classnames'

import ScheduleEventDesktop from './ScheduleEventDesktop'

const ScheduleDesktop: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  const eventsContent = events?.length
    ? events.map((event) => {
        return events.filter((e) => {
          return (
            parseInt(event.startHour.substring(0, 2)) <= parseInt(e.startHour.substring(0, 2)) &&
            parseInt(event.endHour.substring(0, 2)) >= parseInt(e.endHour.substring(0, 2)) &&
            event.date === e.date
          )
        })
      })
    : []

  eventsContent.forEach((event, index) => {
    const multipleEvents = eventsContent.filter((x) => x.length > 1).flat()
    if (!(event.length > 1)) {
      if (multipleEvents.includes(event[0])) return eventsContent.splice(index, 1)
    }
  })

  const getEarlierHour = (event) => {
    return event.reduce((a, b) => {
      return parseInt(a.startHour.substring(0, 2)) ===
        Math.min(parseInt(a.startHour.substring(0, 2)), parseInt(b.startHour.substring(0, 2)))
        ? a
        : b
    })
  }

  const getLaterHour = (event) => {
    return event.reduce((a, b) => {
      return parseInt(a.endHour.substring(0, 2)) ===
        Math.max(parseInt(a.endHour.substring(0, 2)), parseInt(b.endHour.substring(0, 2)))
        ? a
        : b
    })
  }

  const getGridPlaceholders = (x: number) => {
    return Array.from({ length: 10 }, (_, y) => {
      const noLeftLine = x === 0

      const placeholderClasses = cx('schedule-desktop__grid-placeholder', {
        '-no-left-line': noLeftLine,
      })

      return <div className={placeholderClasses} style={{ gridColumn: x + 2, gridRow: y + 2 }}></div>
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
        {eventsContent?.length > 0 &&
          eventsContent.map((eventDay) => {
            const earlierStartHour = getEarlierHour(eventDay)
            const laterEndHour = getLaterHour(eventDay)
            const startGridColumn = Hours.findIndex((hour) => hour === earlierStartHour.startHour) + 2
            const endGridColumn = laterEndHour.endHour !== '23:00' ? Hours.findIndex((h) => h === laterEndHour.endHour) + 2 : 15
            const gridRow = ScheduleWeek.findIndex((day) => day.dateDesktop === eventDay[0].date) + 2
            const gridColumnNumber = endGridColumn - startGridColumn

            const eventDaySorted = eventDay.sort(
              (a, b) => parseInt(a.startHour.substring(0, 2)) - parseInt(b.startHour.substring(0, 2))
            )

            return (
              <div
                key={eventsContent.indexOf(eventDaySorted)}
                className="schedule-desktop__grid-events"
                style={{
                  gridColumn: `${startGridColumn} / ${endGridColumn}`,
                  gridRow: gridRow,
                  gridTemplateColumns: `repeat(${gridColumnNumber}, 1fr)`,
                }}>
                {eventDaySorted.map((event) => {
                  return (
                    <ScheduleEventDesktop
                      key={event.id}
                      bgColor={event.backgroundColor}
                      displayTitleOnDesktop={event.displayTitleOnDesktop}
                      endHour={event.endHour}
                      gridColumnNumber={gridColumnNumber}
                      logo={event.logo}
                      startHour={event.startHour}
                      startParentGridColumn={startGridColumn}
                      title={event.title}
                    />
                  )
                })}
              </div>
            )
          })}
        {Array.from({ length: 13 }, (_, x) => getGridPlaceholders(x))}
      </div>
    </div>
  )
}

export default ScheduleDesktop
