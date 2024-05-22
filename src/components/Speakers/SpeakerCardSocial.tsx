import React from 'react'
import { LinkedinIcon, TwitterIcon, LinktrIcon } from 'components/icons'

type SpeakerCardSocialProps = {
  href: string,
  type: 'linkedin' | 'twitter' | 'linktr',
}

const SpeakerCardSocial = ({ href, type }: SpeakerCardSocialProps) => {
  return (
    <a className="speaker-card__link" href={href} rel="noopener noreferrer" target="_blank">
      {type === 'linkedin' && <LinkedinIcon className="speaker-card__linkedin" />}
      {type === 'twitter' && <LinktrIcon className="speaker-card__linktr" />}
      {type === 'linktr' && <TwitterIcon className="speaker-card__twitter" />}
    </a>
  )
}

export default SpeakerCardSocial
