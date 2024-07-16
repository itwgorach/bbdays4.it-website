import { PlScheduleWeek, EnScheduleWeek } from 'constants/constants'
import React, { useState } from 'react'
import cx from 'classnames'
import { CalendarIcon } from 'components/icons'
import { useLanguageContext } from 'contexts/LanguageContext'

const ScheduleCalendar = () => {
  const { language } = useLanguageContext()
  const ScheduleWeek = language === 'pl' ? PlScheduleWeek : EnScheduleWeek
  const [isOpen, setIsOpen] = useState(true)

  const calendarToggleClass = cx('calendar__grid', isOpen && '-open')

  const toggleCalendar = () => setIsOpen(!isOpen)

  const getDateClasses = (index: number) => {
    const isEventDate = ScheduleWeek.some((obj) => {
      return index + 1 === 6 || index + 1 === 7 || index + 1 === 8 || index + 1 === 9 ? true : obj.dateMobile === (index + 1).toString()
    })

    const dateClasses = cx('calendar__grid-date', {
      '-coloured': isEventDate,
      '-first': index  === 0,
    })

    return dateClasses
  }

  return (
    <div className="calendar">
      <button className="calendar__button" type="button" onClick={toggleCalendar}>
        <span className="calendar__button-text">{language === 'pl' ? 'Wrzesień 2024' : 'September 2024'}</span>
        {isOpen ? <CalendarIcon /> : <CalendarIcon className="calendar__icon-rotated" />}
      </button>
      <div className={calendarToggleClass}>
        {ScheduleWeek.map(({ dayMobile }, index) => {
          return index >= 4 ? (
            <div key={index} className="calendar__grid-day">
              {dayMobile }
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
