import { ScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'

// type ScheduleMobileProps = {
//   scheduleTitle: ScheduleType['scheduleTitle'],
//   events: ScheduleType['events'],
// }

import ScheduleEventMobile from './ScheduleEventMobile'

const ScheduleMobile: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  return (
    <div className="schedule-mobile">
      <h1 className="schedule-mobile__header">{scheduleTitle}</h1>
      <div className="schedule-mobile__grid">
        {ScheduleWeek.map(({ dayMobile, dateMobile }, i) => {
          return (
            <div key={dateMobile} className="schedule-mobile__grid-date" style={{ gridColumn: 1, gridRow: i + 1 }}>
              {dateMobile}
              <div className="schedule-mobile__grid-date-day">{dayMobile}</div>
            </div>
          )
        })}
        {ScheduleWeek.map(({ dateMobile }, i) => {
          return (
            <div key={i} className="schedule-mobile__grid-events" style={{ gridColumn: 2, gridRow: i + 1 }}>
              {events &&
                events.map((event) => {
                  if (dateMobile === (event?.date && event?.date.substring(0, 2))) {
                    return (
                      <ScheduleEventMobile
                        key={event?.id}
                        bgColor={event?.backgroundColor}
                        endHour={event?.endHour}
                        startHour={event?.startHour}
                        title={event?.title}
                      />
                    )
                  }
                  return null
                })}
            </div>
          )
        })}
        {Array.from({ length: 10 }, (_, y) => {
          return (
            <div className="schedule-mobile__grid-placeholder" style={{ gridColumn: 2, gridRow: `${y + 1}` }}></div>
          )
        })}
      </div>
    </div>
  )
}

export default ScheduleMobile
