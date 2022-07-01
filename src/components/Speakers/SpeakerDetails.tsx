import Modal from 'components/Modal'
import React, { FC } from 'react'

import { SpeakersPageType } from 'types'

const SpeakerDetails: FC<SpeakersPageType> = ({ speaker, handleToggleModal }) => {
  const { Photo, FirstName, LastName, Title, Description, Position } = speaker

  const FullName = `${FirstName} ${LastName}`
  const image = !!Photo && Photo?.url

  return (
    <Modal handleToggle={handleToggleModal} title={FullName}>
      <div className="speaker-details">
        <div className="speaker-details__header">
          {image ? (
            <img alt={FullName} className="image" loading="lazy" src={image} />
          ) : (
            <div className="image--empty">Brak zdjęcia</div>
          )}
          <div className="header-text">
            <div className="first-name">{FirstName}</div>
            <div className="second-name">{LastName}</div>
            <div className="title">
              {Title} - {Position}
            </div>
          </div>
        </div>
        <div className="body-text">
          <p>{Description}</p>
        </div>
      </div>
    </Modal>
  )
}

export default SpeakerDetails
