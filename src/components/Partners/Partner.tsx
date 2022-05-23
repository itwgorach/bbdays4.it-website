import classnames from 'classnames'
import React, { FC } from 'react'

import { PartnerType } from 'types'
import { getPartnerWhiteLogo } from 'utils/getPartnerWhiteLogo'

const Partner: FC<PartnerType> = ({ Name, WebsiteURL, Logo, whiteLogo }: PartnerType) => {
  return (
    <>
      <a className="partners__link" href={WebsiteURL} rel='noopener noreferrer' target='_blank'>
        <img alt={Name} className="partners__link-image -mobile" src={Logo?.url}/>
        <img alt={Name} className="partners__link-image -desktop" src={whiteLogo}/>
      </a>
    </>
  )
}

export default Partner
