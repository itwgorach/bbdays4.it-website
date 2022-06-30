import React, { FC } from 'react'

import { SpeakerType } from 'types'
import Speaker from './Speaker'

type SpeakersType = {
  speakers: SpeakerType[],
  sectionTittle: string,
}

const Speakers: FC<SpeakersType> = ({ speakers, sectionTittle }) => {
  return (
    <div className="speakers" id={sectionTittle.toLowerCase()}>
      <div className="speakers__inner">
        <h1 className="speakers__header">{sectionTittle}</h1>
        <div className="speakers__list">
          {speakers.length ? (
            speakers.map((speaker: SpeakerType) => <Speaker key={speaker.id} speaker={speaker} />)
          ) : (
            <div>Brak prelegentów</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Speakers
