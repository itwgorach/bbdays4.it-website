import React, { FC } from 'react'

import { SpeakersPageType } from 'types'

const Speaker: FC<SpeakersPageType> = ({ speaker }: SpeakersPageType) => {
  const { Photo, FirstName, LastName, Title } = speaker

  const FullName = `${FirstName} ${LastName}`
  const image = !!Photo && Photo?.url

  return (
    <div className="speaker-card">
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
  )
}

export default Speaker
