import React, { FC } from 'react'

import { PartnerType } from 'types'
import Partner from './Partner'

type PartnersType = {
  partners: PartnerType[],
  sectionTitle: string,
}

const Partners: FC<PartnersType> = ({ partners, sectionTitle }) => (
  <div className="partners" id={sectionTitle.toLowerCase()}>
    <div className="partners__inner">
      <h1 className="partners__header">{sectionTitle}</h1>
      <div className="partners__logos">
        {partners?.map((partner: PartnerType) => (
          <Partner key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  </div>
)

export default Partners
