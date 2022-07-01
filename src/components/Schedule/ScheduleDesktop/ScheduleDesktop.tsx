import { Hours, ScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'
import cx from 'classnames'

import ScheduleEventDesktop from './ScheduleEventDesktop'

const ScheduleDesktop: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  return (
    <div className="schedule-desktop">
      <h1 className="schedule-desktop__header">{scheduleTitle}</h1>
      <div className="schedule-desktop__grid">
        <div className="schedule-desktop__grid-hours">
          {Hours.map((hour) => {
            return (
              <div key={hour} className="schedule-desktop__grid-hour">
                {hour}
              </div>
            )
          })}
        </div>
        <div className="schedule-desktop__grid-days">
          {ScheduleWeek.map(({ dayDesktop, dateDesktop }) => {
            return (
              <div key={dateDesktop} className="schedule-desktop__grid-date">
                {dateDesktop}
                <div className="schedule-desktop__grid-date-day">{dayDesktop}</div>
              </div>
            )
          })}
        </div>
        {events &&
          events.map((event) => {
            return (
              <ScheduleEventDesktop
                key={event?.id}
                bgColor={event?.backgroundColor}
                date={event?.date}
                displayTitleOnDesktop={event?.displayTitleOnDesktop}
                endHour={event?.endHour}
                logo={event?.logo}
                startHour={event?.startHour}
                title={event?.title}
              />
            )
          })}
        {Array.from({ length: 13 }, (_, x) => {
          return Array.from({ length: 10 }, (_, y) => {
            const noLeftLine = x === 0

            const placeholderClasses = cx('schedule-desktop__grid-placeholder', {
              '-no-left-line': noLeftLine,
            })

            return <div className={placeholderClasses} style={{ gridColumn: `${x + 2}`, gridRow: `${y + 2}` }}></div>
          })
        })}
      </div>
    </div>
  )
}

export default ScheduleDesktop
