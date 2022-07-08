import React, { FC, useState } from 'react'

import { SpeakersType, SpeakerType } from 'types'
import SpeakerCard from './SpeakerCard'
import SpeakerDetails from './SpeakerDetails'

const Speakers: FC<SpeakersType> = ({ speakers, sectionTitle, sectionSubtitle }) => {
  const titleId = sectionTitle ? sectionTitle.toLocaleLowerCase() : ''
  const [speaker, setSpeaker] = useState<SpeakerType | null>(null)

  const handleSetSpeaker = (speaker: SpeakerType) => setSpeaker(speaker)

  return (
    <>
      <div className="speakers" id={titleId}>
        <div className="speakers__inner">
          <div className="speakers__header">
            <h1 className="speakers__title">{sectionTitle}</h1>
            <h4 className="speakers__subtitle">{sectionSubtitle}</h4>
          </div>
          <div className="speakers__spacer" />
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
          <div className="speakers__spacer -down" />
        </div>
      </div>
      <SpeakerDetails handleToggleModal={() => setSpeaker(null)} isOpen={!!speaker} speaker={speaker} />
    </>
  )
}
export default Speakers
