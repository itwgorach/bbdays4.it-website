import React, { FC } from 'react'

import { PartnerSlideType } from 'types'
import { getPartnerWhiteLogo } from 'utils/getPartnerWhiteLogo'

const Partner: FC<PartnerSlideType> = ({ partner }: PartnerSlideType) => {
  const whiteLogo = getPartnerWhiteLogo(partner)
  const { Name, WebsiteURL, Logo } = partner

  return (
    <>
      <a className="partners__link" href={WebsiteURL} rel="noopener noreferrer" target="_blank">
        <img alt={Name} className="partners__link-image -mobile" loading='lazy' src={Logo?.url} />
        <img alt={Name} className="partners__link-image -desktop"  loading='lazy' src={whiteLogo} />
      </a>
    </>
  )
}

export default Partner
