import React, { FC } from 'react'

import { SpeakersType } from 'types'
import SpeakerCard from './SpeakerCard'

const Speakers: FC<SpeakersType> = ({ speakers, sectionTitle }) => {
  const titleID = sectionTitle ? sectionTitle.toLocaleLowerCase() : ''

  return (
    <div className="speakers" id={titleID}>
      <div className="speakers__inner">
        <h1 className="speakers__header">{sectionTitle}</h1>
        <div className="speakers__list">
          {speakers ? (
            speakers.map((speaker) => <SpeakerCard key={speaker.id} speaker={speaker} />)
          ) : (
            <div>Brak prelegentów</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Speakers
