import Modal from 'components/Modal'
import React, { FC, useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { AgendaType, SpeakerType } from 'types'
import { makeLectureSection, getSpeaker } from 'utils/agendaDataProcessing'
import { navigate } from 'gatsby'
import LectureDetails from './LectureDetails'
import AgendaSection from './AgendaSection'

type AgendaProps = AgendaType & {
  location: unknown,
}

const Agenda: FC<AgendaProps> = ({ title, subtitle, lectures, speakers, location }) => {
  const lecturesSorted = lectures.sort(
    (a, b) => parseInt(a.startHour.substring(0, 2)) - parseInt(b.startHour.substring(0, 2)),
  )

  const lecturesWithSpeakersOnly = lectures.filter((lecture) => lecture.subtitle)

  const firstSection = makeLectureSection(lecturesSorted, null, '14:45')
  const secondSection = makeLectureSection(lecturesSorted, '14:45', '16:00')
  const thirdSection = makeLectureSection(lecturesSorted, '16:00', null)

  const [modalData, setModalData] = useState<SpeakerType | null>(null)

  const shouldOpenModal = () => {
    const params = new URLSearchParams(location.search)
    const lecture = params && params.get('lecture')

    if (lecture) {
      const selectedSpeaker = lecture.split('-').join(' ')
      const modalProps = getSpeaker(selectedSpeaker, speakers)

      if (modalProps) {
        const selectedLecture = lecturesWithSpeakersOnly.find(
          (lecture) => lecture?.subtitle === `${modalProps.firstName} ${modalProps.lastName}`,
        )

        const searchQuery = `?lecture=${selectedLecture?.subtitle?.split(' ').join('-').toLocaleLowerCase()}`
        navigate(`/${searchQuery}#agenda`)

        setModalData({
          ...modalProps,
          hour: selectedLecture.startHour,
          room: selectedLecture.room,
          location: location,
        })
        return true
      }
    }

    return false
  }

  const [isModalOpen, setIsModalOpen] = useState(shouldOpenModal)

  const handleUrlChange = (searchQuery: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `${location.origin}/${searchQuery}#agenda`)
    }
  }

  const handleModalToggle = (event, { ...modalProps }) => {
    setIsModalOpen((isModalOpen) => {
      setModalData({
        ...modalProps,
        location: location,
      })

      const parentId = event.target.parentNode.id
      const selectedLecture = parentId.substring(parentId.indexOf('/') + 1)
      const searchQuery = `?lecture=${selectedLecture}`
      handleUrlChange(searchQuery)

      return !isModalOpen
    })
  }

  const handleNextLectureClick = (name: string) => {
    const indexOfCurrentLecture = lecturesWithSpeakersOnly.findIndex((lecture) => lecture?.subtitle === name)
    const nextLecture = lecturesWithSpeakersOnly[indexOfCurrentLecture + 1]
    const nextSpeaker = getSpeaker(nextLecture.subtitle, speakers)
    const searchQuery = `?lecture=${nextLecture.subtitle?.split(' ').join('-').toLocaleLowerCase()}`
    handleUrlChange(searchQuery)

    setModalData({
      ...nextSpeaker,
      hour: nextLecture.startHour,
      room: nextLecture.room,
      location: location,
    })
  }

  const handlePrevLectureClick = (name: string) => {
    const indexOfCurrentLecture = lecturesWithSpeakersOnly.findIndex((lecture) => lecture?.subtitle === name)
    const prevLecture = lecturesWithSpeakersOnly[indexOfCurrentLecture - 1]
    const prevSpeaker = getSpeaker(prevLecture.subtitle, speakers)
    const searchQuery = `?lecture=${prevLecture.subtitle?.split(' ').join('-').toLocaleLowerCase()}`
    handleUrlChange(searchQuery)

    setModalData({
      ...prevSpeaker,
      hour: prevLecture.startHour,
      room: prevLecture.room,
      location: location,
    })
  }

  const getPrevLecture = () => {
    const indexOfCurrentLecture = lecturesWithSpeakersOnly.findIndex(
      (lecture) => lecture?.subtitle === `${modalData?.firstName} ${modalData?.lastName}`,
    )

    const hasPrevLecture = indexOfCurrentLecture > 0 ? true : false
    return hasPrevLecture ? lecturesWithSpeakersOnly[indexOfCurrentLecture - 1]?.subtitle : null
  }

  const getNextLecture = () => {
    const indexOfCurrentLecture = lecturesWithSpeakersOnly.findIndex(
      (lecture) => lecture?.subtitle === `${modalData?.firstName} ${modalData?.lastName}`,
    )

    const hasNextLecture = indexOfCurrentLecture < lecturesWithSpeakersOnly.length - 1 ? true : false
    return hasNextLecture ? lecturesWithSpeakersOnly[indexOfCurrentLecture + 1]?.subtitle : null
  }

  const { setActiveLink } = useActiveLink()

  return (
    <Waypoint
      bottomOffset="60%"
      topOffset="39%"
      onEnter={() => {
        setActiveLink('agenda')
      }}
      onLeave={() => {
        setActiveLink('')
      }}>
      <div className="agenda" id="agenda">
        <div className="agenda__header">
          <div className="agenda__header-title">{title}</div>
          <div className="agenda__header-subtitle">{subtitle}</div>
        </div>
        <div className="agenda__rooms -desktop -first">Sala pierwsza</div>
        <div className="agenda__rooms -mobile -first">
          <span className="agenda__rooms-main">Sala pierwsza</span>
          <span className="agenda__rooms-second">Sala druga</span>
        </div>
        <div className="agenda__lectures">
          <AgendaSection handleModalToggle={handleModalToggle} section={firstSection} speakers={speakers} />
          <div className="agenda__rooms -desktop">
            <div className="agenda__rooms-hour"></div>
            <div className="agenda__rooms-inner">
              <span>Sala pierwsza</span>
              <span>Sala druga</span>
            </div>
          </div>
          <AgendaSection handleModalToggle={handleModalToggle} section={secondSection} speakers={speakers} />
          <div className="agenda__rooms -desktop">
            <div className="agenda__rooms-hour"></div>
            <div className="agenda__rooms-inner">
              <span>Sala pierwsza</span>
            </div>
          </div>
          <AgendaSection handleModalToggle={handleModalToggle} section={thirdSection} speakers={speakers} />
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
    </Waypoint>
  )
}

export default Agenda
