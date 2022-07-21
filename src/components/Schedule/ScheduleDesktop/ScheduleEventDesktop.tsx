import { Hours } from 'constants/constants'
import React, { FC } from 'react'
import { EventType } from 'types'

type ScheduleEventType = {
  event: EventType,
  gridColumnNumber: number,
  startParentGridColumn: number,
}

const ScheduleEventDesktop: FC<ScheduleEventType> = ({
  event: { backgroundColor, endHour, startHour, title, logo, displayTitleOnDesktop },
  gridColumnNumber,
  startParentGridColumn,
}) => {
  const eventHours = Hours.slice(startParentGridColumn - 1, startParentGridColumn + gridColumnNumber - 1)
  const startGridColumn = eventHours.findIndex((h) => h === startHour) + 2
  const endGridColumn = endHour !== '22:00' ? eventHours.findIndex((h) => h === endHour) + 2 : 13

  return (
    <div
      className="schedule-desktop__grid-events-event"
      style={{ backgroundColor: backgroundColor, gridColumn: `${startGridColumn} / ${endGridColumn}` }}>
      {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
      {logo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo.url} />}
    </div>
  )
}

export default ScheduleEventDesktop
