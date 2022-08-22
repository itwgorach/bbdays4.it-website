import Modal from 'components/Modal'
import React, { FC, useState } from 'react'
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
      const selectedSpeaker = lecture.split('-').join(' ')
      const modalProps = getSpeaker(selectedSpeaker)

      setModalData(modalProps)

      return true
    }

    return false
  })

  const handleModalToggle = (event, { ...modalProps }) =>
    setIsModalOpen((isModalOpen) => {
      setModalData(modalProps)

      // const parentId = event.target.parentNode.id
      // const selectedLecture = parentId.substring(parentId.indexOf('/') + 1)
      // const searchQuery = `?lecture=${selectedLecture}`
      // console.log(event)

      // console.log(location)
      // if (!location.href.includes('?lecture=')) {
      //   navigate(`${location.origin}/#agenda${searchQuery}`, { replace: true })
      // } else {
      //   navigate(`${location.origin}/#agenda`, { replace: true })
      // }

      // if (typeof window !== 'undefined') {
      //   console.log(location)
      //   if (!location.href.includes('?lecture=')) {
      //     window.history.pushState({}, '', `${location.origin}/${searchQuery}#agenda`)
      //   } else {
      //     window.history.back()
      //   }
      // }

      return !isModalOpen
    })

  const lecturesSorted = lectures.sort(
    (a, b) => parseInt(a.startHour.substring(0, 2)) - parseInt(b.startHour.substring(0, 2)),
  )

  const firstSection = lecturesSorted.filter((event) => event.startHour < '14:40').sort((a, b) => a.room - b.room)
  const firstSectionGrouped = groupArrayByKey(firstSection, 'startHour')
  const firstSectionContent = makeContent(firstSectionGrouped)

  const secondSection = lecturesSorted
    .filter((event) => event.startHour >= '14:40' && event.startHour < '16:00')
    .sort((a, b) => a.room - b.room)
  const secondSectionGrouped = groupArrayByKey(secondSection, 'startHour')
  const secondSectionContent = makeContent(secondSectionGrouped)

  const thirdSection = lecturesSorted.filter((event) => event.startHour >= '16:00').sort((a, b) => a.room - b.room)
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

  return (
    <div className="agenda" id="agenda">
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
                  const modalProps = subtitle && getSpeaker(subtitle)

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
                  const modalProps = subtitle && getSpeaker(subtitle)

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
                  const modalProps = subtitle && getSpeaker(subtitle)

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
        <LectureDetails {...modalData} handleModalToggle={handleModalToggle} />
      </Modal>
    </div>
  )
}

export default Agenda
