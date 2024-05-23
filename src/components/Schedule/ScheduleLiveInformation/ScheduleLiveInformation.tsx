import React from 'react'
import { checkEventIsActive } from 'utils/checkEventIsActive'

type Event = {
  id: string
  title: string
  startHour: string
  endHour: string
  date: string
  backgroundColor: string
  displayTitleOnDesktop: boolean
  link: string
  logo: null
}

const ScheduleLiveInformation = ({ events }: { events: [Event] }) => {
  if (!events) {
    return null
  }

  return (
    <div className="schedule__live">
      {events.map((event) => {
        const { date, startHour, endHour } = event
        const isActive = checkEventIsActive(date, startHour, endHour)
        return (
          isActive && (
            <div className="schedule__live-item" style={{ background: `${event.backgroundColor}` }}>
              <p className="schedule__live-title">{event.title}</p>
            </div>
          )
        )
      })}
    </div>
  )
}

export default ScheduleLiveInformation
