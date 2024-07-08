import React, { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import { Rating } from 'react-simple-star-rating'
import { getSpeaker } from 'utils/agendaDataProcessing'
import { CloseButtonIcon } from 'components/icons'
import { Lecture, AgendaLiveInformationProps, Vote, VoteError, RatingEvent } from 'types/AgendaType'
import { useLanguageContext } from 'contexts/LanguageContext'

const nameValidation = (name: string) => {
  const regex = /^[a-zA-Z\s\.,-]+$/

  if (name === '') return true

  const [firstName, lastName] = name.split(' ')

  if (firstName === '' || lastName === '') return false
  if (!regex.test(name)) return false

  return lastName ? `${firstName} ${lastName}` : false
}

const getActiveLecture = (dateOfLectures: string, lectures: Lecture[]): Lecture | null => {
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

const calculateTimeDifference = (eventDate: string) => {
  const currentDate = new Date()
  const targetDate = new Date(eventDate)

  const difference = targetDate.getTime() - currentDate.getTime()
  const totalSeconds = Math.floor(difference / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}
const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

const AgendaLiveInformation: React.FC<AgendaLiveInformationProps> = ({
  dateOfLectures,
  handleModalToggle,
  lectures,
  speakers,
}) => {
  const [isOpenVote, setIsOpenVote] = useState(false)
  const [isOpenCounter, setIsOpenCounter] = useState(true)
  const [isSendRate, setIsSendRate] = useState(false)
  const [timeLeft, setTimeLeft] = useState(calculateTimeDifference(dateOfLectures))
  const [vote, setVote] = useState<Vote>({
    educationalValue: 0,
    feedback: '',
    nick: '',
    speech: 0,
  })
  const [voteError, setVoteError] = useState<VoteError>({
    educationalValue: false,
    name: false,
    speech: false,
    feedback: false,
  })
  const { language } = useLanguageContext()

  const activeLecture = getActiveLecture(dateOfLectures, lectures)
  const prevLecture = findPrevLecture(activeLecture, lectures)
  const votedStorage =
    typeof localStorage !== 'undefined' ? localStorage.getItem(`${prevLecture?.subtitle}`) : undefined
  const nickStorage = typeof localStorage !== 'undefined' ? localStorage.getItem('nick') : undefined

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
  useEffect(() => {
    if (timeLeft.days > 60 || timeLeft.days <= 0) {
      setIsOpenCounter(false)
    }
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeDifference(dateOfLectures))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft.days])

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
    setVoteError((prevValue) => ({ ...prevValue, [name]: false }))

    if (rate !== undefined) {
      setVote((prevValue) => ({ ...prevValue, [name]: rate }))
    }
    if (event !== undefined) {
      const { value } = event.target
      setVote((prevValue) => ({ ...prevValue, [name]: value }))
    }
  }

  const submitRating = async () => {
    setVoteError({ educationalValue: false, name: false, speech: false, feedback: false })

    const nameError = nameValidation(nickStorage ? nickStorage : vote.nick)

    if (!vote.educationalValue) setVoteError((prevValue) => ({ ...prevValue, educationalValue: true }))
    if (!vote.speech) setVoteError((prevValue) => ({ ...prevValue, speech: true }))
    if (vote.feedback.length > 1000) setVoteError((prevValue) => ({ ...prevValue, feedback: true }))
    if (!nameError) setVoteError((prevValue) => ({ ...prevValue, name: true }))

    if (!vote.educationalValue || !vote.speech || !nameError || vote.feedback.length > 1000) return

    if (vote.educationalValue && vote.speech && nameError) {
      setIsSendRate(true)
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

      try {
        const response = await fetch('https://api.bbdays4it.selleo.com/api/speaker-ratings/', {
          body: JSON.stringify(ratingData),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        })

        if (!response.ok) throw new Error('Failed to submit rating')

        setVote({
          educationalValue: 0,
          feedback: '',
          nick: '',
          speech: 0,
        })

        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(prevLecture?.subtitle, JSON.stringify(ratingData))
        }

        if (!nickStorage && ratingData.data.nick !== '') {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('nick', ratingData.data.nick)
          }
        }
      } catch (error) {
        console.error('Error submitting rating:', error)
      } finally {
        setTimeout(() => {
          setIsSendRate(false)
          setIsOpenVote(!isOpenVote)
        }, 4000)
      }
    }
  }

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
  if (isOpenCounter)
    return (
      <div className="agenda__live">
        <div className="agenda__live-counter">
          <button className="agenda__button-close" onClick={() => setIsOpenCounter(false)}>
            <CloseButtonIcon />
          </button>
          <p className="agenda__live-counter--number">
            Zaczynamy za: {timeLeft.days}
            <span className="agenda__live-counter--time-unit">{timeLeft.days === 1 ? 'dzień' : 'dni'}</span>{' '}
            {formatNumber(timeLeft.hours)}
            <span className="agenda__live-counter--time-unit"> godz.</span> {formatNumber(timeLeft.minutes)}
            <span className="agenda__live-counter--time-unit"> min.</span>
            {formatNumber(timeLeft.seconds)}
            <span className="agenda__live-counter--time-unit">sec.</span>
          </p>
        </div>
      </div>
    )

  if (!activeLecture) return null

  if (!activeLecture) return null

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
                  <span className={vote.feedback.length > 1000 ? 'agenda__live-input--error' : undefined}>
                    {vote.feedback.length + '/1000'}
                  </span>
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
                      {voteError.name && (
                        <p className="agenda__live-rating-error--name">*Podaj proszę poprawnę imię i nazwisko.</p>
                      )}
                    </>
                  ) : (
                    <p className="agenda__live-input--label">
                      Każde głosowanie zwiększa szansę na nagrodę! Twoje dane zostają automatycznie powielone w puli
                      losowania po każdym, oddanym na prelegenta głosie. 🙌
                    </p>
                  )}
                  <button className="agenda__live-button" onClick={submitRating}>
                    {language === 'pl' ? 'Wyślij' : 'Send'}
                  </button>
                </>
              ) : (
                <div>
                  {' '}
                  {isSendRate ? (
                    <p className="agenda__live-thanks">
                      Dziękujemy za oddanie głosu! Jeśli zostawiłeś swoje dane, zapraszamy na losowanie nagród podczas
                      zakończenia konferencji 🫡
                    </p>
                  ) : (
                    <div className="agenda__live-voted">
                      {language === 'pl' ? (
                        <>
                          <p>Już oddałeś głos na tego prelegenta 🫶</p>
                          <p>Możliwość głosowania na kolejnego pojawi się podczas następnej prelekcji.</p>
                          <p>Dziękujemy!</p>
                        </>
                      ) : (
                        <>
                          <p>You have already voted for this speaker 🫶</p>
                          <p>The opportunity to vote for the next one will appear during the next lecture.</p>
                          <p>Thank you!</p>
                        </>
                      )}
                      <button className="agenda__live-button" onClick={() => setIsOpenVote(!isOpenVote)}>
                        {language === 'pl' ? 'Zamknij' : 'Close'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Modal>
          <div
            className={`agenda__live-${activeLecture.backgroundColor} agenda__live-description`}
            onClick={speakerModal}>
            <div className="agenda__live-lecturer">
              {activeLecture.subtitle && (
                <p className="agenda__live-header">{language === 'pl' ? 'AKTUALNY WYKŁAD:' : 'CURRENT LECTURE:'}</p>
              )}
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
                {language === 'pl' ? 'Zagłosuj na poprzedniego prelegenta' : 'Vote for the previous speaker'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AgendaLiveInformation
