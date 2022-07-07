import { Hours } from 'constants/constants'
import React from 'react'

const ScheduleEventDesktop = ({
  bgColor,
  startHour,
  endHour,
  gridColumnNumber,
  logo,
  title,
  startParentGridColumn,
  displayTitleOnDesktop,
}) => {
  const eventHours = Hours.slice(startParentGridColumn - 1, startParentGridColumn + gridColumnNumber - 1)
  const startGridColumn = eventHours.findIndex((h) => h === startHour) + 2
  const endGridColumn = endHour !== '23:00' ? eventHours.findIndex((h) => h === endHour) + 2 : 13

  return (
    <div
      className="schedule-desktop__grid-events-event"
      style={{ backgroundColor: bgColor, gridColumn: `${startGridColumn} / ${endGridColumn}` }}>
      {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
      {logo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo?.url} />}
    </div>
  )
}

export default ScheduleEventDesktop
