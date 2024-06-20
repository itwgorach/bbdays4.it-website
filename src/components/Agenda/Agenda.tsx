import Modal from 'components/Modal'
import React, { FC, useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { AgendaType, SpeakerType } from 'types'
import { getSpeaker } from 'utils/agendaDataProcessing'
import { navigate } from 'gatsby'
import LectureDetails from './LectureDetails'
import AgendaSection from './AgendaSection'
import AgendaLiveInformation from './AgendaLiveInformation'

type AgendaProps = AgendaType & {
  location: unknown
}

const Agenda: FC<AgendaProps> = ({ title, subtitle, lectures, speakers, location, dateOfLectures }) => {
  const lecturesSorted =
    Array.isArray(lectures) &&
    lectures.sort((a, b) => {
      const hourA = parseInt(a.startHour.split(':')[0])
      const hourB = parseInt(b.startHour.split(':')[0])

      if (hourA !== hourB) {
        return hourA - hourB
      }

      const minuteA = parseInt(a.startHour.split(':')[1])
      const minuteB = parseInt(b.startHour.split(':')[1])

      return minuteA - minuteB
    })

  const lecturesWithSpeakersOnly = lecturesSorted.filter((lecture) => lecture.subtitle)

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
          location: location,
          room: selectedLecture.room,
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

  const handleModalToggle = (event, modalProps) => {
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
      location: location,
      room: nextLecture.room,
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
      location: location,
      room: prevLecture.room,
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
        <AgendaLiveInformation
          handleModalToggle={handleModalToggle}
          dateOfLectures={dateOfLectures}
          lectures={lecturesSorted}
          speakers={speakers}
        />
        <div className="agenda__header">
          <div className="agenda__header-title">{title}</div>
          <div className="agenda__header-subtitle">{subtitle}</div>
        </div>
        <div className="agenda__lectures">
          <AgendaSection handleModalToggle={handleModalToggle} lectures={lecturesSorted} speakers={speakers} />
        </div>
        <Modal className="-lecture" isOpen={isModalOpen} title={title}>
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
