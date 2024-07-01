import { PlScheduleWeek, EnScheduleWeek } from 'constants/constants'
import React, { FC } from 'react'
import { ScheduleType } from 'types'

import { useLanguageContext } from 'contexts/LanguageContext'
import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar'
import ScheduleEventMobile from './ScheduleEventMobile'

const ScheduleMobile: FC<ScheduleType> = ({ scheduleTitle, events }) => {
  const { language } = useLanguageContext()
  const ScheduleWeek = language === 'pl' ? PlScheduleWeek : EnScheduleWeek
  const getHourFromString = (hour: string) => {
    return hour.substring(0, 2)
  }

  const eventsSorted = events.sort(
    (a, b) => parseInt(getHourFromString(a.startHour)) - parseInt(getHourFromString(b.startHour)),
  )

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
            {eventsSorted?.length > 0 &&
              eventsSorted.map((event) => {
                if (dateMobile === (event.date && event.date.substring(0, 2))) {
                  return (
                    <ScheduleEventMobile
                      key={event.id}
                      bgColor={event.backgroundColor}
                      endHour={event.endHour}
                      link={event.link}
                      logo={event.logo}
                      startHour={event.startHour}
                      title={event.title}
                    />
                  )
                }
                return null
              })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleMobile
