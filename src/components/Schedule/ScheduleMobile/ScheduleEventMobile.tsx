import React from 'react'

const ScheduleEventMobile = ({ bgColor, endHour, link, startHour, title }) => {
  return (
    <>
      {link ? (
        <a
          className="schedule-mobile__grid-event"
          href={link}
          rel="noopener noreferrer"
          style={{ backgroundColor: bgColor }}
          target="_blank">
          <div className="schedule-mobile__grid-event-title">{title}</div>
          <div className="schedule-mobile__grid-event-hours">
            {startHour} - {endHour}
          </div>
        </a>
      ) : (
        <div className="schedule-mobile__grid-event" style={{ backgroundColor: bgColor }}>
          <div className="schedule-mobile__grid-event-title">{title}</div>
          <div className="schedule-mobile__grid-event-hours">
            {startHour} - {endHour}
          </div>
        </div>
      )}
    </>
  )
}

export default ScheduleEventMobile
