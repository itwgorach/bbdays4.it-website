import React, { FC, useState } from 'react'

import { SpeakersPageType } from 'types'
import SpeakerDetails from './SpeakerDetails'

const SpeakerCard: FC<SpeakersPageType> = ({ speaker }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { Photo, FirstName, LastName, Title } = speaker

  const FullName = `${FirstName} ${LastName}`
  const image = !!Photo && Photo?.url

  const handleToggleModal = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div className="speaker-card" onClick={handleToggleModal}>
        {image ? (
          <img alt={FullName} className="speaker-card__image" loading="lazy" src={image} />
        ) : (
          <div className="speaker-card__image--empty">Brak zdjęcia</div>
        )}
        <div className="speaker-card__desc">
          <h3 className="title">
            <div>{speaker.FirstName}</div>
            <div>{speaker.LastName}</div>
          </h3>
          <div className="subtitle">- {Title} -</div>
        </div>
      </div>
      {isOpen && <SpeakerDetails handleToggleModal={handleToggleModal} speaker={speaker} />}
    </>
  )
}

export default SpeakerCard
