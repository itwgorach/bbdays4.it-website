import React, { FC, useState } from 'react'

import { SpeakersPageType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Image from 'components/Image'
import SpeakerDetails from './SpeakerDetails'

const SpeakerCard: FC<SpeakersPageType> = ({ speaker }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { photo, title, firstName, lastName } = speaker

  const fullName = getSpeakerFullName(speaker)
  const imageUrl = photo?.url

  const handleToggleModal = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div className="speaker-card" onClick={handleToggleModal}>
        <Image alt={fullName} url={imageUrl} />
        <div className="speaker-card__content">
          <h3 className="speaker-card__title">
            <div>{firstName}</div>
            <div>{lastName}</div>
          </h3>
          <div className="speaker-card__subtitle">- {title} -</div>
        </div>
      </div>
      <SpeakerDetails
        fullName={fullName}
        handleToggleModal={handleToggleModal}
        imageUrl={imageUrl}
        isOpen={isOpen}
        speaker={speaker}
      />
    </>
  )
}

export default SpeakerCard
