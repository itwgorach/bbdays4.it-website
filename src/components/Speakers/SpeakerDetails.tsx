import React, { FC } from 'react'

import { SpeakersPageType } from 'types'

import Modal from 'components/Modal'
import Image from 'components/Image'

const SpeakerDetails: FC<SpeakersPageType> = ({ handleToggleModal, isOpen, speaker, imageUrl, fullName }) => {
  const { firstName, lastName, title, description, position } = speaker

  return (
    <Modal handleToggle={handleToggleModal} isOpen={isOpen} title={fullName}>
      <div className="speaker-details">
        <div className="speaker-details__header">
          <Image alt={fullName} url={imageUrl} />

          <div className="speaker-details__header-text">
            <div className="speaker-details__first-name">{firstName}</div>
            <div className="speaker-details__second-name">{lastName}</div>
            <div className="speaker-details__title">
              {title} - {position}
            </div>
          </div>
        </div>
        <div className="speaker-details__body-text">
          <p>{description}</p>
        </div>
      </div>
    </Modal>
  )
}

export default SpeakerDetails
