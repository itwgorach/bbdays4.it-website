import { ScheduleWeek } from 'constants/constants'
import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { CalendarIcon } from 'components/icons'

const ScheduleCalendar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [height, setHeight] = useState(300)

  useEffect(() => {
    isOpen ? setHeight(300) : setHeight(0)
  }, [isOpen])

  const handleCalendarOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        Wrzesień 2022
        <button className="calendar__header-button" type="button" onClick={handleCalendarOpen}>
          {isOpen ? <CalendarIcon /> : <CalendarIcon className="-rotated" />}
        </button>
      </div>
      <div className="calendar__grid" style={{ maxHeight: height }}>
        {ScheduleWeek.map(({ dayMobile }, i) => {
          return i >= 3 ? (
            <div key={i} className="calendar__grid-day">
              {dayMobile}
            </div>
          ) : null
        })}
        {Array.from({ length: 30 }, (_, i) => {
          const isEventDate = ScheduleWeek.some((obj) => {
            return i + 1 === 9 ? true : obj.dateMobile === (i + 1).toString()
          })

          const dateClasses = cx('calendar__grid-date', {
            '-coloured': isEventDate,
            '-first': i === 0,
          })

          return <div className={dateClasses}>{i + 1}</div>
        })}
      </div>
    </div>
  )
}

export default ScheduleCalendar
