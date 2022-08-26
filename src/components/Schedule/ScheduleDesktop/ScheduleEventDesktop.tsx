import { Hours } from 'constants/constants'
import React, { FC } from 'react'
import cx from 'classnames'
import { EventType } from 'types'

type ScheduleEventType = {
  event: EventType,
  gridColumnNumber: number,
  isConcurrent: boolean,
  startParentGridColumn: number,
}

const ScheduleEventDesktop: FC<ScheduleEventType> = ({
  event: { backgroundColor, displayTitleOnDesktop, endHour, link, logo, startHour, title },
  gridColumnNumber,
  isConcurrent,
  startParentGridColumn,
}) => {
  const eventHours = Hours.slice(startParentGridColumn - 1, startParentGridColumn + gridColumnNumber - 1)
  const startGridColumn = eventHours.findIndex((h) => h === startHour) + 2
  const endGridColumn = endHour !== '22:00' ? eventHours.findIndex((h) => h === endHour) + 2 : 13
  const isOneHourLong = endGridColumn - startGridColumn === 1
  const shouldDisplayLogo = !(isOneHourLong && isConcurrent) && logo

  const eventClasses = cx('schedule-desktop__grid-events-event', {
    '-vertical': isOneHourLong,
  })

  return (
    <>
      {link ? (
        <a
          className={eventClasses}
          href={link}
          rel="noopener noreferrer"
          style={{ backgroundColor: backgroundColor, gridColumn: `${startGridColumn} / ${endGridColumn}` }}
          target="_blank">
          {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
          {shouldDisplayLogo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo.url} />}
        </a>
      ) : (
        <div
          className={eventClasses}
          style={{ backgroundColor: backgroundColor, gridColumn: `${startGridColumn} / ${endGridColumn}` }}>
          {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
          {shouldDisplayLogo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo.url} />}
        </div>
      )}
    </>
  )
}

export default ScheduleEventDesktop
