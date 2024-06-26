import React, { useState } from 'react'
import Modal from 'components/Modal'
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
    educationalValue: 0,
    feedback: '',
    nick: '',
    speech: 0,
  })
  const [voteError, setVoteError] = useState<VoteError>({
    educationalValue: false,
    speech: false,
  })

  const ratingFields = [
    {
      error: voteError.speech,
      label: 'Wystąpienie',
      name: 'speech',
      paragraph: '(czy prelegent opowiadał w interesujący i angażujący sposób, prezentacja miała klarowną strukturę)',
    },
    {
      error: voteError.educationalValue,
      label: 'Wartość edukacyjna',
      name: 'educationalValue',
      paragraph: '(Czy nauczyłeś się nowych rzeczy, czy prezentacja zgłębiła temat)',
    },
  ]

  const getActiveLecture = (): Lecture | null => {
    const currentDate = Date.now()
    const [year, month, day] = dateOfLectures.split('.')

    for (let index = 0; index < lectures.length; index++) {
      const lecture = lectures[index]
      const [hours, minutes] = lecture.startHour.split(':').map(Number)
      const startDate = new Date(+year, +month - 1, +day, hours, minutes).getTime()

      let endDate: number
      if (!lectures[index + 1]) {
        // Add 2 hours to the last lecture
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

  const findPrevLecture = (activeLecture: Lecture | null, lectures: Lecture[]): Lecture | null => {
    if (!activeLecture) return null

    const actualLectureIndex = lectures.findIndex((item) => item.title === activeLecture.title)

    if (actualLectureIndex === -1) return null

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
  const votedStorage = localStorage.getItem(`${prevLecture?.subtitle}`)
  const nickStorage = localStorage.getItem(`nick`)

  const voteModal = () => {
    if (!isOpenVote) {
      setIsOpenVote(!isOpenVote)
    } else if (window.confirm('Czy na pewno chcesz opuścić formularz?')) {
      setVote({
        educationalValue: 0,
        feedback: '',
        nick: '',
        speech: 0,
      })
      setIsOpenVote(!isOpenVote)
    }
  }

  const handleRating = ({ name, rate, event }: RatingEvent) => {
    if (voteError.educationalValue || voteError.speech) {
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
    }
    if (event !== undefined) {
      const { value } = event.target
      setVote((prevValue) => ({
        ...prevValue,
        [name]: value,
      }))
    }
  }

  const submitRating = async () => {
    setVoteError({ educationalValue: false, speech: false })

    if (!vote.educationalValue) setVoteError((prevValue) => ({ ...prevValue, educationalValue: true }))
    if (!vote.speech) setVoteError((prevValue) => ({ ...prevValue, speech: true }))

    if (vote.educationalValue && vote.speech) {
      const ratingData = {
        data: {
          average: ((vote.educationalValue + vote.speech) / 2).toFixed(2),
          educationalValue: vote.educationalValue,
          feedback: vote.feedback,
          nick: nickStorage ? nickStorage : vote.nick,
          speaker: prevLecture?.subtitle,
          speech: vote.speech,
        },
      }
      console.log(ratingData)

      try {
        const response = await fetch('http://localhost:1337/api/speaker-ratings/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ratingData),
        })

        if (!response.ok) throw new Error('Failed to submit rating')

        setVote({
          educationalValue: 0,
          feedback: '',
          nick: '',
          speech: 0,
        })
        localStorage.setItem(prevLecture?.subtitle, JSON.stringify(ratingData))
        if (!nickStorage && ratingData.data.nick !== '') {
          localStorage.setItem('nick', ratingData.data.nick)
        }
        setIsOpenVote(!isOpenVote)
      } catch (error) {
        console.error('Error submitting rating:', error)
      }
    }
  }

  if (activeLecture === null) {
    return null
  }

  return (
    <div className="agenda__live">
      {activeLecture && (
        <div className="agenda__live-controler">
          <Modal className="agenda__live-modal" handleToggle={voteModal} isOpen={isOpenVote} title="vote">
            <div className="agenda__live-rating-controler">
              {!votedStorage ? (
                <>
                  <div className={`agenda__live-modal--title ${prevLecture?.title.length > 50 ? 'margin-right' : ''}`}>
                    <span>{prevLecture?.subtitle}: </span>
                    <span className="agenda__live-modal--description">{prevLecture?.title}</span>
                  </div>
                  <button className="agenda__button-close" onClick={voteModal}>
                    <CloseButtonIcon />
                  </button>
                  {ratingFields.map((field) => (
                    <div key={field.name} className="agenda__live-rating">
                      <p className="agenda__live-rating-title">
                        {field.label}:{field.error && <span className="agenda__live-rating-error">*</span>}
                      </p>
                      <p className="agenda__live-rating-subtitle">{field.paragraph}</p>
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
                  {!nickStorage ? (
                    <>
                      <label className="agenda__live-input--label" htmlFor="nick">
                        Weź udział w losowaniu nagród! 🎁 Zostaw nam swoje imię i nazwisko, a podczas zakończenia
                        wybierzemy zwycięzców niespodzianek od organizatorów. <br />
                        Trzymamy kciuki! 🤞
                      </label>
                      <input
                        className="agenda__live-input"
                        name="nick"
                        placeholder="Imię Nazwisko"
                        type="text"
                        value={vote.nick}
                        onChange={(event) => handleRating({ event, name: 'nick' })}
                      />
                    </>
                  ) : (
                    <p className="agenda__live-input--label">
                      Każde głosowanie zwiększa szansę na nagrodę! Twoje dane zostają automatycznie powielony w puli
                      losowania po każdym, oddanym na prelegenta głosie. 🙌
                    </p>
                  )}
                  <button className="agenda__live-button" onClick={submitRating}>
                    Wyślij
                  </button>
                </>
              ) : (
                <div className="agenda__live-voted">
                  <p>Już oddałeś głos na tego prelegenta 🫶</p>
                  <p>Możliwość głosowania na kolejnego pojawi się podczas następnej prelekcji.</p>
                  <p>Dziękujemy!</p>
                  <button className="agenda__live-button" onClick={() => setIsOpenVote(!isOpenVote)}>
                    Zamknij
                  </button>
                </div>
              )}
            </div>
          </Modal>
          <div
            className={`agenda__live-${activeLecture.backgroundColor} agenda__live-description`}
            onClick={speakerModal}>
            <div className="agenda__live-lecturer">
              {activeLecture.subtitle && <p className="agenda__live-header">AKTUALNY WYKŁAD:</p>}
              {activeLecture.subtitle && `${activeLecture.subtitle}: `}
              <span className="agenda__live-title"> {activeLecture.title}</span>
              {activeLecture.logo && (
                <span className="agenda__lecture-logo">
                  <img alt="Logo" src={activeLecture.logo.url} />
                </span>
              )}
            </div>
          </div>
          {prevLecture && (
            <div className="agenda__live-vote">
              <button className="agenda__live-vote--button" onClick={voteModal}>
                Zagłosuj na poprzedniego prelegenta
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AgendaLiveInformation
