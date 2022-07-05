import { ScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'

import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar'
import ScheduleEventMobile from './ScheduleEventMobile'

const ScheduleMobile: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  return (
    <div className="schedule-mobile">
      <h1 className="schedule-mobile__header">{scheduleTitle}</h1>
      <ScheduleCalendar />
      <div className="schedule-mobile__grid">
        {ScheduleWeek.map(({ dayMobile, dateMobile }, i) => (
          <div key={dateMobile} className="schedule-mobile__grid-date" style={{ gridRow: i + 1 }}>
            {dateMobile}
            <div className="schedule-mobile__grid-date-day">{dayMobile}</div>
          </div>
        ))}
        {ScheduleWeek.map(({ dateMobile }, i) => (
          <div key={i} className="schedule-mobile__grid-events" style={{ gridRow: i + 1 }}>
            {events?.length > 0 &&
              events.map((event) => {
                if (dateMobile === (event.date && event.date.substring(0, 2))) {
                  return (
                    <ScheduleEventMobile
                      key={event.id}
                      bgColor={event.backgroundColor}
                      endHour={event.endHour}
                      startHour={event.startHour}
                      title={event.title}
                    />
                  )
                }
                return null
              })}
          </div>
        ))}
        {Array.from({ length: 10 }, (_, y) => (
          <div className="schedule-mobile__grid-placeholder" style={{ gridColumn: 2, gridRow: `${y + 1}` }}></div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleMobile
