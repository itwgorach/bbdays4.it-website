import React from 'react'
import cx from 'classnames'
import { getSpeaker } from 'utils/agendaDataProcessing'

const AgendaSection = ({ lectures, handleModalToggle, speakers }) => {
  const getLectureContentClasses = (backgroundColor: string | null, logoUrl: string | null) => {
    const lectureContentClasses = cx('agenda__lecture-content', {
      [`-${backgroundColor}`]: backgroundColor,
      '-row': logoUrl,
    })

    return lectureContentClasses
  }

  const getLectureClasses = (room: number | null) => {
    const lectureClasses = cx('agenda__lecture', {
      '-main': room === 1,
      '-second': room === 2,
    })

    return lectureClasses
  }

  const getLectureId = (name: string) => {
    const lectureId = name.split(' ').join('-').toLocaleLowerCase()

    return lectureId
  }

  return (
    <>
      {lectures.map(({ backgroundColor, title, subtitle, room, logo, startHour }, index) => {
        // const modalProps = subtitle && { ...getSpeaker(subtitle, speakers), hour: startHour, room: room }

        return (
          <div key={index} className="agenda__lecture-wrapper">
            <div className="agenda__lecture-hour">{startHour}</div>
            <div className="agenda__lecture-inner">
              <div key={index} className={getLectureClasses(room)} id={subtitle && `agenda/${getLectureId(subtitle)}`}>
                <div className={getLectureContentClasses(backgroundColor, logo && logo.url)}>
                  {/* {onClick={subtitle ? (event) => handleModalToggle(event, { ...modalProps }) : undefined}>} */}
                  {subtitle && <span className="agenda__lecture-subtitle">{subtitle}</span>}
                  <span className="agenda__lecture-title">{title}</span>
                  {logo && (
                    <span className="agenda__lecture-logo">
                      <img alt="Logo" src={logo.url} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default AgendaSection
