import React, { FC } from 'react'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { Waypoint } from 'react-waypoint'

import { SpeakersType } from 'types'
import { getSortedByIndex } from 'utils/getSortedSpeakers'
import SpeakerCard from './SpeakerCard'
import SpeakerCommingSoon from './SpeakerComingSoon'

const Speakers: FC<SpeakersType> = ({ speakers, sectionTitle, sectionSubtitle }) => {
  const titleId = sectionTitle ? sectionTitle.toLocaleLowerCase() : ''
  const { setActiveLink } = useActiveLink()

  const sortedSpeakers = Array.isArray(speakers) && getSortedByIndex(speakers)

  return (
    <Waypoint
      bottomOffset="60%"
      topOffset="39%"
      onEnter={() => {
        setActiveLink(titleId)
      }}
      onLeave={() => {
        setActiveLink('')
      }}>
      <div className="speakers" id={titleId}>
        <div className="speakers__inner">
          <div className="speakers__header">
            <h1 className="speakers__title">{sectionTitle}</h1>
            <h4 className="speakers__subtitle">{sectionSubtitle}</h4>
          </div>
          <div className="speakers__list">
            {sortedSpeakers ? (
              sortedSpeakers.map((speaker) => speaker && <SpeakerCard key={speaker.id} speaker={speaker} />)
            ) : (
              <div>Brak prelegentów</div>
            )}
          </div>
          <div className="speakers__spacer -down" />
        </div>
      </div>
    </Waypoint>
  )
}
export default Speakers
