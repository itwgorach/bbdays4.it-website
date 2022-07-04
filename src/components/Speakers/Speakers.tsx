import React, { FC, useState } from 'react'

import { SpeakersType, SpeakerType } from 'types'
import SpeakerCard from './SpeakerCard'
import SpeakerDetails from './SpeakerDetails'

const Speakers: FC<SpeakersType> = ({ speakers, sectionTitle }) => {
  const titleId = sectionTitle ? sectionTitle.toLocaleLowerCase() : ''
  const [speaker, setSpeaker] = useState<SpeakerType | null>(null)

  const handleSetSpeaker = (speaker: SpeakerType) => setSpeaker(speaker)

  return (
    <>
      <div className="speakers" id={titleId}>
        <div className="speakers__inner">
          <h1 className="speakers__header">{sectionTitle}</h1>
          <div className="speakers__list">
            {speakers ? (
              speakers.map(
                (speaker) =>
                  speaker && (
                    <SpeakerCard key={speaker.id} handleClick={() => handleSetSpeaker(speaker)} speaker={speaker} />
                  ),
              )
            ) : (
              <div>Brak prelegentów</div>
            )}
          </div>
        </div>
      </div>
      <SpeakerDetails handleToggleModal={() => setSpeaker(null)} isOpen={!!speaker} speaker={speaker} />
    </>
  )
}
export default Speakers
