import Modal from 'components/Modal'
import React, { useState } from 'react'
import ModalProps from 'types/ModalProps'
import { Rating } from 'react-simple-star-rating'
import { getSpeaker } from 'utils/agendaDataProcessing'
import { CloseButtonIcon } from 'components/icons'

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
type Vote = {
  presentation: number
  topic: number
  content: number
  feedback: string
}

type RatingEvent = {
  name: string
  rate?: number
  event?: React.ChangeEvent<HTMLInputElement>
}

type AgendaLiveInformationProps = {
  handleModalToggle: (event: React.MouseEvent, modalProps: ModalProps) => void
  lectures: Lecture[]
  speakers: Speaker[]
}

const AgendaLiveInformation: React.FC<AgendaLiveInformationProps> = ({ handleModalToggle, lectures, speakers }) => {
  const [isOpenVote, setIsOpenVote] = useState<boolean>(false)
  const [vote, setVote] = useState<Vote>({
    content: 0,
    feedback: '',
    presentation: 0,
    topic: 0,
  })

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

  const speakerModal = (event: React.MouseEvent) => {
    if (activeLecture && activeLecture.subtitle) {
      const modalProps = {
        ...getSpeaker(activeLecture.subtitle, speakers),
        hour: activeLecture.startHour,
        room: activeLecture.room,
      }
      console.log(modalProps)

      handleModalToggle(event, modalProps)
    }
  }

  const voteModal = () => {
    if (!isOpenVote) {
      setIsOpenVote((prevValue) => !prevValue)
      return
    }
    if (isOpenVote && window.confirm('Czy na pewno chcesz opuścić formularz?')) {
      setIsOpenVote((prevValue) => !prevValue)
    }
  }
  const handleRating = ({ name, rate, event }: RatingEvent) => {
    if (rate !== undefined) {
      setVote((prevValue) => ({
        ...prevValue,
        [name]: rate,
      }))
    } else if (event !== undefined) {
      const { value } = event.target
      setVote((prevValue) => ({
        ...prevValue,
        feedback: value,
      }))
    }
  }
  const submitRating = () => {
    if (vote.content && vote.topic && vote.presentation) {
      const voteResult = {
        average: ((vote.content + vote.topic + vote.presentation) / 3).toFixed(2),
        feedback: vote.feedback,
      }
      console.log(voteResult)
    }
  }

  if (activeLecture === null) {
    return <></>
  }

  return (
    <div className="agenda__live">
      {activeLecture && (
        <div className="agenda__live-controler">
          <Modal handleToggle={voteModal} isOpen={isOpenVote} title="vote">
            <button className="agenda__button-close" onClick={voteModal}>
              <CloseButtonIcon />
            </button>
            <div>
              <div className="agenda__live-rating">
                <p>Prezentacja:</p>
                <Rating
                  allowFraction
                  titleSeparator="z"
                  onClick={(rate) => handleRating({ name: 'presentation', rate: rate })}
                />
              </div>
              <div className="agenda__live-rating">
                <p>Tematyka:</p>
                <Rating
                  allowFraction
                  titleSeparator="z"
                  onClick={(rate) => handleRating({ name: 'topic', rate: rate })}
                />
              </div>
              <div className="agenda__live-rating">
                <p>Merytoryka:</p>
                <Rating
                  allowFraction
                  titleSeparator="z"
                  onClick={(rate) => handleRating({ name: 'content', rate: rate })}
                />
              </div>
              <input
                placeholder="Opcjonalne"
                type="text"
                value={vote.feedback}
                onChange={(event) => handleRating({ event, name: 'feedback' })}
              />
              <button onClick={submitRating}>Wyślij</button>
            </div>
          </Modal>
          <div
            className={`agenda__live-${activeLecture.backgroundColor} agenda__live-description`}
            onClick={speakerModal}>
            <div className="agenda__live-lecturer">
              {activeLecture.subtitle}:<span className="agenda__live-title"> {activeLecture.title}</span>
            </div>
          </div>
          <div className="agenda__live-vote">
            <button onClick={voteModal}>Vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgendaLiveInformation
