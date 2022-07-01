import React from 'react'

const ScheduleEventMobile = ({ bgColor, startHour, endHour, title }) => {
  return (
    <div className="schedule-mobile__grid-event" style={{ backgroundColor: bgColor }}>
      <div className="schedule-mobile__grid-event-title">{title}</div>
      <div className="schedule-mobile__grid-event-hours">
        {startHour} - {endHour}
      </div>
    </div>
  )
}

export default ScheduleEventMobile
