import React from 'react'
import { checkEventIsActive } from 'utils/checkEventIsActive'

type Event = {
  id: string,
  title: string,
  startHour: string,
  endHour: string,
  date: string,
  backgroundColor: string,
  displayTitleOnDesktop: boolean,
  link: string,
  logo: null,
}

const ScheduleLiveInformation = ({ events }: { events: [Event] }) => {
  return (
    <>
      {events.map((event) => {
        const { date, startHour, endHour } = event
        return checkEventIsActive(date, startHour, endHour) && <p>Event details</p>
      })}
    </>
  )
}

export default ScheduleLiveInformation
