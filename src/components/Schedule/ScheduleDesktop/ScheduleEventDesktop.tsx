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
  const eventHours = Hours.slice(startParentGridColumn / 2 - 1, (startParentGridColumn + gridColumnNumber) / 2)

  const startHourIndex = eventHours.findIndex((hour) => hour.split(':')[0] === startHour?.split(':')[0])
  const startGridColumn = (startHourIndex === -1 ? eventHours.length * 2 : startHourIndex * 2) + 1

  const endHourIndex = eventHours.findIndex((hour) => hour.split(':')[0] === endHour?.split(':')[0])
  const endGridColumn = (endHourIndex === -1 ? eventHours.length * 2 : endHourIndex * 2) + 1

  const startGridColumnWithMinutes = parseInt(startHour.split(':')[1]) > 0 ? startGridColumn + 1 : startGridColumn
  const endGridColumnWithMinutes = parseInt(endHour.split(':')[1]) > 0 ? endGridColumn + 1 : endGridColumn

  const isOneHourLong = (endGridColumn - startGridColumn) / 2 === 1
  const shouldDisplayLogo = !(isOneHourLong && isConcurrent) && logo

  const eventClasses = cx('schedule-desktop__grid-events-event', {
    '-vertical': isOneHourLong,
  })

  return (
    <>
      {link && link !== '/' ? (
        <a
          className={eventClasses}
          href={link}
          rel="noopener noreferrer"
          style={{
            backgroundColor: backgroundColor,
            ...(isConcurrent
              ? { gridColumn: `${startGridColumn} / ${endGridColumn}` }
              : { gridColumn: `${startGridColumnWithMinutes} / ${endGridColumnWithMinutes}` }),
          }}
          target="_blank">
          {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
          {shouldDisplayLogo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo.url} />}
        </a>
      ) : (
        <div
          className={eventClasses}
          style={{
            backgroundColor: backgroundColor,
            ...(isConcurrent
              ? { gridColumn: `${startGridColumn} / ${endGridColumn}` }
              : { gridColumn: `${startGridColumnWithMinutes} / ${endGridColumnWithMinutes}` }),
          }}>
          {displayTitleOnDesktop && <div className="schedule-desktop__grid-events-event-title">{title}</div>}
          {shouldDisplayLogo && <img alt="Logo" className="schedule-desktop__grid-events-event-logo" src={logo.url} />}
        </div>
      )}
    </>
  )
}

export default ScheduleEventDesktop
