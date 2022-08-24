import Modal from 'components/Modal'
import React, { FC, useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { AgendaType, LectureType, SpeakerType } from 'types'
import LectureDetails from './LectureDetails'

const groupArrayByKey = (arr: LectureType[], key: string) => {
  return arr.reduce((storage, item) => {
    const group = item[key]
    storage[group] = storage[group] || []
    storage[group].push(item)
    return storage
  }, {})
}

const makeContent = (arr) => {
  return Object.keys(arr)
    .sort()
    .reduce((obj, key) => {
      obj[key] = arr[key]
      return obj
    }, {})
}

type AgendaProps = AgendaType & {
  location: unknown,
}

const Agenda: FC<AgendaProps> = ({ title, subtitle, lectures, speakers, location }) => {
  const [modalData, setModalData] = useState<SpeakerType>({
    backgroundColor: '',
    description: '',
    firstName: '',
    lastName: '',
    linkedinUrl: '',
    linktrUrl: '',
    photo: null,
    position: '',
    title: '',
    twitterUrl: '',
  })

  const agendaRef = useRef(null)

  const handleNextLectureClick = (name: string) => {
    const lecturesWithSpeakers = lectures.filter((lecture) => lecture.subtitle)

    const indexOfCurrentLecture = lecturesWithSpeakers.findIndex((lecture) => lecture?.subtitle === name)
    const nextLecture = lecturesWithSpeakers[indexOfCurrentLecture + 1]
    const nextSpeaker = getSpeaker(nextLecture.subtitle)
    const searchQuery = `?lecture=${nextLecture.subtitle?.split(' ').join('-').toLocaleLowerCase()}`

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `${location.origin}/${searchQuery}#agenda`)
    }

    setModalData({
      ...nextSpeaker,
      hour: nextLecture.startHour,
      room: nextLecture.room,
      location: location,
    })
  }

  const handlePrevLectureClick = (name: string) => {
    const lecturesWithSpeakers = lectures.filter((lecture) => lecture.subtitle)

    const indexOfCurrentLecture = lecturesWithSpeakers.findIndex((lecture) => lecture?.subtitle === name)
    const prevLecture = lecturesWithSpeakers[indexOfCurrentLecture - 1]
    const prevSpeaker = getSpeaker(prevLecture.subtitle)
    const searchQuery = `?lecture=${prevLecture.subtitle?.split(' ').join('-').toLocaleLowerCase()}`

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `${location.origin}/${searchQuery}#agenda`)
    }

    setModalData({
      ...prevSpeaker,
      hour: prevLecture.startHour,
      room: prevLecture.room,
      location: location,
    })
  }

  const getPrevLecture = () => {
    const lecturesWithSpeakers = lectures.filter((lecture) => lecture.subtitle)

    const indexOfCurrentLecture = lecturesWithSpeakers.findIndex(
      (lecture) => lecture?.subtitle === `${modalData.firstName} ${modalData.lastName}`,
    )

    const hasPrevLecture = indexOfCurrentLecture > 0 ? true : false

    return hasPrevLecture ? lecturesWithSpeakers[indexOfCurrentLecture - 1]?.subtitle : null
  }

  const getNextLecture = () => {
    const lecturesWithSpeakers = lectures.filter((lecture) => lecture.subtitle)

    const indexOfCurrentLecture = lecturesWithSpeakers.findIndex(
      (lecture) => lecture?.subtitle === `${modalData.firstName} ${modalData.lastName}`,
    )

    const hasNextLecture = indexOfCurrentLecture < lecturesWithSpeakers.length - 1 ? true : false

    return hasNextLecture ? lecturesWithSpeakers[indexOfCurrentLecture + 1]?.subtitle : null
  }

  const getSpeaker = (name: string) => {
    const speaker =
      speakers &&
      speakers.filter((speaker) => {
        return `${speaker.firstName} ${speaker.lastName}`.toLocaleLowerCase() === name.toLocaleLowerCase()
      })

    return speaker && speaker[0]
  }

  const [isModalOpen, setIsModalOpen] = useState(() => {
    const params = new URLSearchParams(location.search)
    const lecture = params && params.get('lecture')

    if (lecture) {
      const lecturesWithSpeakers = lectures.filter((lecture) => lecture.subtitle)
      const selectedSpeaker = lecture.split('-').join(' ')
      const modalProps = getSpeaker(selectedSpeaker)

      if (modalProps) {
        const selectedLecture = lecturesWithSpeakers.filter(
          (lecture) => lecture?.subtitle === `${modalProps.firstName} ${modalProps.lastName}`,
        )

        setModalData({
          ...modalProps,
          hour: selectedLecture[0].startHour,
          room: selectedLecture[0].room,
          location: location,
        })
        return true
      }
    }

    return false
  })

  const handleModalToggle = (event, { ...modalProps }) => {
    setIsModalOpen((isModalOpen) => {
      setModalData({
        ...modalProps,
        location: location,
      })

      const parentId = event.target.parentNode.id
      const selectedLecture = parentId.substring(parentId.indexOf('/') + 1)
      const searchQuery = `?lecture=${selectedLecture}`

      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', `${location.origin}/${searchQuery}#agenda`)
      }

      return !isModalOpen
    })
  }

  const lecturesSorted = lectures.sort(
    (a, b) => parseInt(a.startHour.substring(0, 2)) - parseInt(b.startHour.substring(0, 2)),
  )

  const firstSection = lecturesSorted.filter((event) => event.startHour < '14:20').sort((a, b) => a.room - b.room)
  const firstSectionGrouped = groupArrayByKey(firstSection, 'startHour')
  const firstSectionContent = makeContent(firstSectionGrouped)

  const secondSection = lecturesSorted
    .filter((event) => event.startHour >= '14:20' && event.startHour < '15:40')
    .sort((a, b) => a.room - b.room)
  const secondSectionGrouped = groupArrayByKey(secondSection, 'startHour')
  const secondSectionContent = makeContent(secondSectionGrouped)

  const thirdSection = lecturesSorted.filter((event) => event.startHour >= '15:40').sort((a, b) => a.room - b.room)
  const thirdSectionGrouped = groupArrayByKey(thirdSection, 'startHour')
  const thirdSectionContent = makeContent(thirdSectionGrouped)

  const getLectureClasses = (room: number | null) => {
    const lectureClasses = cx('agenda__lecture', {
      '-main': room === 1,
      '-second': room === 2,
    })

    return lectureClasses
  }

  const getLectureContentClasses = (backgroundColor: string | null, logoUrl: string | null) => {
    const lectureContentClasses = cx('agenda__lecture-content', {
      '-dark': backgroundColor === 'dark',
      '-primary': backgroundColor === 'primary',
      '-row': logoUrl,
      '-secondary': backgroundColor === 'secondary',
    })

    return lectureContentClasses
  }

  const getLectureId = (name: string) => {
    const lectureId = name.split(' ').join('-').toLocaleLowerCase()

    return lectureId
  }

  useEffect(() => {
    if (location.search) {
      agendaRef.current.scrollIntoView()
    }
  }, [agendaRef.current])

  return (
    <div className="agenda" id="agenda" ref={agendaRef}>
      <div className="agenda__header">
        <div className="agenda__header-title">{title}</div>
        <div className="agenda__header-subtitle">{subtitle}</div>
      </div>
      <div className="agenda__rooms -desktop -first">Aula główna</div>
      <div className="agenda__rooms -mobile -first">
        <span className="agenda__rooms-main">Aula główna</span>
        <span className="agenda__rooms-second">Sala druga</span>
      </div>
      <div className="agenda__lectures">
        {Object.keys(firstSectionContent).map((key, index) => {
          return (
            <div key={index} className="agenda__lecture-wrapper">
              <div className="agenda__lecture-hour">{key}</div>
              <div className="agenda__lecture-inner">
                {firstSectionContent[key].map(({ backgroundColor, title, subtitle, room, logo }, idx) => {
                  const modalProps = subtitle && { ...getSpeaker(subtitle), hour: key, room: room }

                  return (
                    <div
                      key={idx}
                      className={getLectureClasses(room)}
                      id={subtitle && `agenda/${getLectureId(subtitle)}`}>
                      <div
                        className={getLectureContentClasses(backgroundColor, logo && logo.url)}
                        onClick={subtitle ? (event) => handleModalToggle(event, { ...modalProps }) : undefined}>
                        {subtitle && <span className="agenda__lecture-subtitle">{subtitle}</span>}
                        <span className="agenda__lecture-title">{title}</span>
                        {logo && (
                          <span className="agenda__lecture-logo">
                            <img alt="Logo" src={logo.url} />
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <div className="agenda__rooms -desktop">
          <div className="agenda__rooms-hour"></div>
          <div className="agenda__rooms-inner">
            <span>Aula główna</span>
            <span>Sala druga</span>
          </div>
        </div>
        {Object.keys(secondSectionContent).map((key, index) => {
          return (
            <div key={index} className="agenda__lecture-wrapper">
              <div className="agenda__lecture-hour">{key}</div>
              <div className="agenda__lecture-inner">
                {secondSectionContent[key].map(({ backgroundColor, title, subtitle, room, logo }, idx) => {
                  const modalProps = subtitle && { ...getSpeaker(subtitle), hour: key, room: room }

                  return (
                    <div
                      key={idx}
                      className={getLectureClasses(room)}
                      id={subtitle && `agenda/${getLectureId(subtitle)}`}>
                      <div
                        className={getLectureContentClasses(backgroundColor, logo && logo.url)}
                        onClick={subtitle ? (event) => handleModalToggle(event, { ...modalProps }) : undefined}>
                        {subtitle && <span className="agenda__lecture-subtitle">{subtitle}</span>}
                        <span className="agenda__lecture-title">{title}</span>
                        {logo && (
                          <span className="agenda__lecture-logo">
                            <img alt="Logo" src={logo.url} />
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <div className="agenda__rooms -desktop">
          <div className="agenda__rooms-hour"></div>
          <div className="agenda__rooms-inner">
            <span>Aula główna</span>
          </div>
        </div>
        {Object.keys(thirdSectionContent).map((key, index) => {
          return (
            <div key={index} className="agenda__lecture-wrapper">
              <div className="agenda__lecture-hour">{key}</div>
              <div className="agenda__lecture-inner">
                {thirdSectionContent[key].map(({ backgroundColor, title, subtitle, room, logo }, idx) => {
                  const modalProps = subtitle && { ...getSpeaker(subtitle), hour: key, room: room }

                  return (
                    <div
                      key={idx}
                      className={getLectureClasses(room)}
                      id={subtitle && `agenda/${getLectureId(subtitle)}`}>
                      <div
                        className={getLectureContentClasses(backgroundColor, logo && logo.url)}
                        onClick={subtitle ? (event) => handleModalToggle(event, { ...modalProps }) : undefined}>
                        {subtitle && <span className="agenda__lecture-subtitle">{subtitle}</span>}
                        <span className="agenda__lecture-title">{title}</span>
                        {logo && (
                          <span className="agenda__lecture-logo">
                            <img alt="Logo" src={logo.url} />
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <Modal className="-lecture" handleToggle={handleModalToggle} isOpen={isModalOpen} title={title}>
        <LectureDetails
          {...modalData}
          handleModalToggle={handleModalToggle}
          handleNextLectureClick={handleNextLectureClick}
          handlePrevLectureClick={handlePrevLectureClick}
          nextLecture={getNextLecture()}
          prevLecture={getPrevLecture()}
        />
      </Modal>
    </div>
  )
}

export default Agenda
