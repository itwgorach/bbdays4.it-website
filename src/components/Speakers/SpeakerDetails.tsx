import React, { FC } from 'react'

import { SpeakerDetailsType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Modal from 'components/Modal'
import Image from 'components/Image'

const SpeakerDetails: FC<SpeakerDetailsType> = ({ handleToggleModal, isOpen, speaker }) => {
  if (!speaker) {
    return null
  }

  const { firstName, lastName, title, description, position, photo } = speaker
  const fullName = getSpeakerFullName(speaker)
  const imageUrl = photo?.url

  return (
    <Modal handleToggle={handleToggleModal} isOpen={isOpen} title={fullName} withModifier="-medium">
      <div className="speaker-details">
        <div className="speaker-details__header">
          <Image alt={fullName} url={imageUrl} />
          <div className="speaker-details__header-text">
            <div className="speaker-details__first-name">{firstName}</div>
            <div className="speaker-details__second-name">{lastName}</div>
            <div className="speaker-details__position">{position}</div>
            <div className="speaker-details__title">&quot;{title}&quot;</div>
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
