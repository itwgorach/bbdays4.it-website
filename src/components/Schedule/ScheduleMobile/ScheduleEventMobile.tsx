import React from 'react'

const ScheduleEventMobile = ({ bgColor, endHour, link, startHour, title, logo }) => {
  const shouldDisplayLogo = title.length === 0

  return (
    <>
      {link ? (
        <a
          className="schedule-mobile__grid-event"
          href={link}
          rel="noopener noreferrer"
          style={{ backgroundColor: bgColor }}
          target="_blank">
          {shouldDisplayLogo ? (
            <img alt="Logo" className="schedule-mobile__grid-event-logo" src={logo.url} />
          ) : (
            <div className="schedule-mobile__grid-event-title">{title}</div>
          )}
          <div className="schedule-mobile__grid-event-hours">
            {startHour} - {endHour}
          </div>
        </a>
      ) : (
        <div className="schedule-mobile__grid-event" style={{ backgroundColor: bgColor }}>
          {shouldDisplayLogo ? (
            <img alt="Logo" className="schedule-mobile__grid-event-logo" src={logo.url} />
          ) : (
            <div className="schedule-mobile__grid-event-title">{title}</div>
          )}
          <div className="schedule-mobile__grid-event-hours">
            {startHour} - {endHour}
          </div>
        </div>
      )}
    </>
  )
}

export default ScheduleEventMobile
