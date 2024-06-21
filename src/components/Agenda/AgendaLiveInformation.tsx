import Modal from 'components/Modal'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { getSpeaker } from 'utils/agendaDataProcessing'
import { CloseButtonIcon } from 'components/icons'
import { Lecture, AgendaLiveInformationProps, Vote, VoteError, RatingEvent } from 'types/AgendaType'

const AgendaLiveInformation: React.FC<AgendaLiveInformationProps> = ({
  dateOfLectures,
  handleModalToggle,
  lectures,
  speakers,
}) => {
  const [isOpenVote, setIsOpenVote] = useState<boolean>(false)
  const [vote, setVote] = useState<Vote>({
    content: 0,
    feedback: '',
    presentation: 0,
    topic: 0,
  })
  const [voteError, setVoteError] = useState<VoteError>({
    content: false,
    presentation: false,
    topic: false,
  })
  const ratingFields = [
    { error: voteError.presentation, label: 'Prezentacja', name: 'presentation' },
    { error: voteError.topic, label: 'Tematyka', name: 'topic' },
    { error: voteError.content, label: 'Merytoryka', name: 'content' },
  ]

  const getActiveLecture = (): Lecture | null => {
    const currentDate = Date.now()

    const [year, month, day] = dateOfLectures.split('.')

    for (let index = 0; index < lectures.length; index++) {
      const lecture = lectures[index]
      const { startHour } = lecture

      const [hours, minutes] = startHour.split(':').map(Number)
      const startDate = new Date(+year, +month - 1, +day, hours, minutes).getTime()

      let endDate: number

      if (!lectures[index + 1]) {
        // add 2h to last lecture
        endDate = startDate + 120 * 60 * 1000
      } else {
        const nextLecture = lectures[index + 1]
        const [nextHours, nextMinutes] = nextLecture.startHour.split(':').map(Number)
        const nextStartDate = new Date(+year, +month - 1, +day, nextHours, nextMinutes).getTime()

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

      handleModalToggle(event, modalProps)
    }
  }
  const findPrevLecture = (activeLecture, lectures) => {
    const actualLectureIndex = lectures.findIndex((item) => item.subtitle === activeLecture?.subtitle)

    if (actualLectureIndex === -1) {
      return null
    }

    let index = actualLectureIndex - 1
    while (index >= 0) {
      if (lectures[index]?.backgroundColor === 'primary') {
        return lectures[index]
      }
      index--
    }

    return null
  }
  const prevLecture = findPrevLecture(activeLecture, lectures)

  const voteModal = () => {
    if (!isOpenVote) {
      setIsOpenVote((prevValue) => !prevValue)
      return
    }
    if (isOpenVote && window.confirm('Czy na pewno chcesz opuścić formularz?')) {
      setVote({
        content: 0,
        feedback: '',
        presentation: 0,
        topic: 0,
      })
      setIsOpenVote((prevValue) => !prevValue)
    }
  }

  const handleRating = ({ name, rate, event }: RatingEvent) => {
    if (voteError.content || voteError.presentation || voteError.topic) {
      setVoteError((prevValue) => ({
        ...prevValue,
        [name]: false,
      }))
    }
    if (rate !== undefined) {
      setVote((prevValue) => ({
        ...prevValue,
        [name]: rate,
      }))
      return
    }
    if (event !== undefined) {
      const { value } = event.target
      setVote((prevValue) => ({
        ...prevValue,
        feedback: value,
      }))
    }
  }

  const submitRating = async () => {
    setVoteError({ content: false, presentation: false, topic: false })
    if (!vote.presentation) {
      setVoteError((prevValue) => ({
        ...prevValue,
        presentation: true,
      }))
    }
    if (!vote.topic) {
      setVoteError((prevValue) => ({
        ...prevValue,
        topic: true,
      }))
    }
    if (!vote.content) {
      setVoteError((prevValue) => ({
        ...prevValue,
        content: true,
      }))
      return
    }

    if (vote.content && vote.topic && vote.presentation) {
      const ratingData = {
        data: {
          average: ((vote.content + vote.topic + vote.presentation) / 3).toFixed(2),
          content: vote.content,
          feedback: vote.feedback,
          presentation: vote.presentation,
          speaker: prevLecture.subtitle,
          topic: vote.topic,
        },
      }

      try {
        const response = await fetch('http://localhost:1337/api/speaker-ratings/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ratingData),
        })

        if (!response.ok) {
          console.error('Response status:', response.status)
          console.error('Response text:', await response.text())
          throw new Error('Failed to submit rating')
        }
      } catch (error) {
        console.error('Error submitting rating:', error)
      }
      setVote({
        content: 0,
        feedback: '',
        presentation: 0,
        topic: 0,
      })
      setIsOpenVote((prevValue) => !prevValue)
    }
  }

  if (activeLecture === null) {
    return <></>
  }

  return (
    <div className="agenda__live">
      {activeLecture && (
        <div className="agenda__live-controler">
          <Modal className="agenda__live-modal" handleToggle={voteModal} isOpen={isOpenVote} title="vote">
            <div className="agenda__live-rating-controler">
              <div className={`agenda__live-modal--title ${prevLecture?.title.length > 50 ? 'margin-right' : ''}`}>
                <span>{prevLecture?.subtitle}: </span>
                <span className="agenda__live-modal--description">{prevLecture?.title}</span>
              </div>
              <button className="agenda__button-close" onClick={voteModal}>
                <CloseButtonIcon />
              </button>
              {ratingFields.map((field) => (
                <div key={field.name} className="agenda__live-rating">
                  <p>
                    {field.label}:{field.error && <span className="agenda__live-rating-error">*</span>}
                  </p>
                  <Rating
                    allowFraction
                    titleSeparator="z"
                    onClick={(rate) => handleRating({ name: field.name, rate })}
                  />
                </div>
              ))}
              <label className="agenda__live-input--label" htmlFor="feedback">
                Podziel się swoimi przemyśleniami. <br />
                Twoja opinia jest dla nas ważna 😉
              </label>
              <input
                className="agenda__live-input"
                name="feedback"
                placeholder="Opcjonalne"
                type="text"
                value={vote.feedback}
                onChange={(event) => handleRating({ event, name: 'feedback' })}
              />
              <button className="agenda__live-button" onClick={submitRating}>
                Wyślij
              </button>
            </div>
          </Modal>
          <div
            className={`agenda__live-${activeLecture.backgroundColor} agenda__live-description`}
            onClick={speakerModal}>
            <div className="agenda__live-lecturer">
              {activeLecture.subtitle && activeLecture.subtitle + ': '}
              <span className="agenda__live-title"> {activeLecture.title}</span>
            </div>
          </div>
          {prevLecture && (
            <div className="agenda__live-vote">
              <button onClick={voteModal}>Głosuj</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AgendaLiveInformation
