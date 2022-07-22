import { Hours } from 'constants/constants'
import React, { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
  const endGridColumn = endHour !== '23:00' ? eventHours.findIndex((h) => h === endHour) + 2 : 13

  return (
    <div
      className="schedule-desktop__grid-events-event"
      style={{ backgroundColor: backgroundColor, gridColumn: `${startGridColumn} / ${endGridColumn}` }}>
      {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
      {logo && (
        <LazyLoadImage
          alt="Logo"
          className="schedule-desktop__grid-events-event-logo"
          src={`${logo?.url?.substring(0, logo?.url?.lastIndexOf('/') - 11)}f_auto,q_auto/${logo?.url?.substring(
            logo?.url?.lastIndexOf('/') - 11,
          )}`}
        />
      )}
    </div>
  )
}

export default ScheduleEventDesktop
