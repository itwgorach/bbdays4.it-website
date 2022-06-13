import React, { FC } from 'react'

import { PartnerSlideType } from 'types'
import { getPartnerWhiteLogo } from 'utils/getPartnerWhiteLogo'

const Partner: FC<PartnerSlideType> = ({ partner }: PartnerSlideType) => {
  const logoUrl = getPartnerWhiteLogo(partner)
  const { Name, WebsiteURL } = partner

  return (
    <a className="partners__link" href={WebsiteURL} rel="noopener noreferrer" target="_blank">
      <div className="partners__link-image-wrapper">
        <img alt={Name} className="partners__link-image" loading="lazy" src={logoUrl} />
      </div>
    </a>
  )
}

export default Partner
