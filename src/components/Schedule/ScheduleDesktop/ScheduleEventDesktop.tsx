import { Hours, ScheduleWeek } from 'constants/constants'
import React from 'react'

const ScheduleEventDesktop = ({ bgColor, startHour, endHour, date, logo, title, displayTitleOnDesktop }) => {
  const startY = Hours.findIndex((h) => h === startHour) + 2
  const endY = endHour !== '23:00' ? Hours.findIndex((h) => h === endHour) + 2 : 15
  const x = ScheduleWeek.findIndex((obj) => obj.dateDesktop === date) + 2

  return (
    <div
      className="schedule-desktop__grid-event"
      style={{ backgroundColor: bgColor, gridColumn: `${startY} / ${endY}`, gridRow: x }}>
      {displayTitleOnDesktop && <div className="schedule-desktop__grid-event-title">{title}</div>}
      {logo && <img alt="Logo" className="schedule-desktop__grid-event-logo" src={logo?.url} />}
    </div>
  )
}

export default ScheduleEventDesktop
