import { ScheduleWeek } from 'constants/constants'
import React, { useState } from 'react'
import cx from 'classnames'
import { CalendarIcon } from 'components/icons'

const ScheduleCalendar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const calendarToggleClass = cx('calendar__grid', isOpen && '-open')

  const toggleCalendar = () => setIsOpen(!isOpen)

  const getDateClasses = (index: number) => {
    const isEventDate = ScheduleWeek.some((obj) => {
      return index + 1 === 9 ? true : obj.dateMobile === (index + 1).toString()
    })

    const dateClasses = cx('calendar__grid-date', {
      '-coloured': isEventDate,
      '-first': index === 0,
    })

    return dateClasses
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        Wrzesień 2022
        <button className="calendar__header-button" type="button" onClick={toggleCalendar}>
          {isOpen ? <CalendarIcon /> : <CalendarIcon className="calendar__icon-rotated" />}
        </button>
      </div>
      <div className={calendarToggleClass}>
        {ScheduleWeek.map(({ dayMobile }, index) => {
          return index >= 3 ? (
            <div key={index} className="calendar__grid-day">
              {dayMobile}
            </div>
          ) : null
        })}
        {Array.from({ length: 30 }, (_, index) => {
          return <div className={getDateClasses(index)}>{index + 1}</div>
        })}
      </div>
    </div>
  )
}

export default ScheduleCalendar
