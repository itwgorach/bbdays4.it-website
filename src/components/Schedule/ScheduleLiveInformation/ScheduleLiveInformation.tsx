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
  const click = () => {
    events.map((event) => {
      const { date, startHour, endHour } = event
      console.log(checkEventIsActive(date, startHour, endHour))
    })
  }
  return (
    <>
      <button onClick={click}>Click</button>
    </>
  )
}

export default ScheduleLiveInformation
