import React, { FC } from 'react'
import { useActiveLink } from 'contexts/ActiveLinkContext'
import { Waypoint } from 'react-waypoint'

import { PartnerType } from 'types'
import Partner from './Partner'

type PartnersType = {
  partners: PartnerType[],
  sectionTitle: string,
}

const Partners: FC<PartnersType> = ({ partners, sectionTitle }) => {
  const { setActiveLink } = useActiveLink()

  return (
    <div className="partners" id={sectionTitle.toLowerCase()}>
      <Waypoint
        bottomOffset="40%"
        topOffset="59%"
        onEnter={() => {
          setActiveLink(sectionTitle.toLowerCase())
        }}
        onLeave={({ currentPosition }) => {
          if (currentPosition === 'below' && sectionTitle.toLowerCase() === 'organizatorzy') {
            setActiveLink('')
          }
        }}>
        <div className="partners__inner">
          <h1 className="partners__header">{sectionTitle}</h1>
          <div className="partners__logos">
            {partners?.map((partner: PartnerType) => (
              <Partner key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </Waypoint>
    </div>
  )
}

export default Partners
