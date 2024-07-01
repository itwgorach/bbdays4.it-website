import React from 'react'
import { LinkedinIcon, TwitterIcon, LinktrIcon } from 'components/icons'

type SocialType = 'linkedin' | 'twitter' | 'linktr'

type SpeakerCardSocialProps = {
  href: string
  type: SocialType
}

const icons: Record<SocialType, React.ElementType> = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  linktr: LinktrIcon,
}

const SpeakerCardSocial = ({ href, type }: SpeakerCardSocialProps) => {
  const IconComponent = icons[type]

  return (
    <a className="speaker-card__link" href={href} rel="noopener noreferrer" target="_blank">
      <IconComponent className={`speaker-card__${type}`} />
    </a>
  )
}

export default SpeakerCardSocial
