import React, { FC } from 'react'

import { SpeakerType } from 'types'
import { getSpeakerFullName } from 'utils/getSpeakerFullName'

import Image from 'components/Image'

type SpeakerCardProps = {
  speaker: SpeakerType,
  handleClick: () => void,
}

const SpeakerCard: FC<SpeakerCardProps> = ({ speaker, handleClick }) => {
  const { photo, title, firstName, lastName } = speaker
  const fullName = getSpeakerFullName(speaker)
  const imageUrl = photo?.url

  return (
    <div className="speaker-card" onClick={handleClick}>
      <Image alt={fullName} url={imageUrl} />
      <div className="speaker-card__content">
        <h3 className="speaker-card__title">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </h3>
        <div className="speaker-card__subtitle">- {title} -</div>
      </div>
    </div>
  )
}

export default SpeakerCard
