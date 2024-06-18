import React from 'react'
import ModalProps from 'types/ModalProps'
import { getSpeaker } from 'utils/agendaDataProcessing'

type Lecture = {
  title: string
  startHour: string
  subtitle?: string
  room?: number
  backgroundColor?: string
  logo?: { url: string }
}

type Speaker = {
  name: string
}

type AgendaLiveInformationProps = {
  handleModalToggle: (event: React.MouseEvent, modalProps: ModalProps) => void
  lectures: Lecture[]
  speakers: Speaker[]
}

const AgendaLiveInformation: React.FC<AgendaLiveInformationProps> = ({ handleModalToggle, lectures, speakers }) => {
  const getActiveLecture = (): Lecture | null => {
    const currentDate = Date.now()

    for (let index = 0; index < lectures.length; index++) {
      const lecture = lectures[index]
      const { startHour } = lecture
      const [hours, minutes] = startHour.split(':').map(Number)
      const startDate = new Date(2024, 5, 17, hours, minutes).getTime()

      let endDate: number

      if (!lectures[index + 1]) {
        // add 2h to last lecture
        endDate = startDate + 120 * 60 * 1000
      } else {
        const nextLecture = lectures[index + 1]
        const [nextHours, nextMinutes] = nextLecture.startHour.split(':').map(Number)
        const nextStartDate = new Date(2024, 5, 18, nextHours, nextMinutes).getTime()

        endDate = nextStartDate
      }

      if (currentDate >= startDate && currentDate < endDate) {
        return lecture
      }
    }

    return null
  }

  const activeLecture = getActiveLecture()

  const handleClick = (event: React.MouseEvent) => {
    if (activeLecture && activeLecture.subtitle) {
      const modalProps = {
        ...getSpeaker(activeLecture.subtitle, speakers),
        hour: activeLecture.startHour,
        room: activeLecture.room,
      }
      handleModalToggle(event, modalProps)
    }
  }
  if (activeLecture === null) {
    return <></>
  }

  return (
    <div className="agenda__live">
      {activeLecture && (
        <div className="agenda__live-controler">
          <div
            className={`agenda__live-${activeLecture.backgroundColor} agenda__live-description`}
            onClick={handleClick}>
            <div className="agenda__live-lecturer">
              {activeLecture.subtitle}:<span className="agenda__live-title"> {activeLecture.title}</span>
            </div>
          </div>
          <div className="agenda__live-vote">
            <button>Vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgendaLiveInformation
