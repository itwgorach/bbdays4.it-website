import React from 'react'
import cx from 'classnames'
import { getSpeaker } from 'utils/agendaDataProcessing'

const AgendaSection = ({ section, handleModalToggle, speakers }) => {
  const getLectureContentClasses = (backgroundColor: string | null, logoUrl: string | null) => {
    const lectureContentClasses = cx('agenda__lecture-content', {
      '-dark': backgroundColor === 'dark',
      '-primary': backgroundColor === 'primary',
      '-row': logoUrl,
      '-secondary': backgroundColor === 'secondary',
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
      {Object.keys(section).map((key, index) => {
        return (
          <div key={index} className="agenda__lecture-wrapper">
            <div className="agenda__lecture-hour">{key}</div>
            <div className="agenda__lecture-inner">
              {section[key].map(({ backgroundColor, title, subtitle, room, logo }, idx) => {
                const modalProps = subtitle && { ...getSpeaker(subtitle, speakers), hour: key, room: room }

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
    </>
  )
}

export default AgendaSection
