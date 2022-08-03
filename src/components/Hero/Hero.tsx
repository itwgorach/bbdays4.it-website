import cx from 'classnames'
import React, { FC } from 'react'

import { BaseHeroType } from 'types'

type HeroProps = BaseHeroType & {
  isFirstHero: boolean,
}

const RegistrationLinks = [
  {
    href: 'https://app.evenea.pl/event/bbdays4it-2022-konferencja-ATH',
    id: 0,
    text: 'Zapisy na Konferencję',
  },
  {
    href: 'https://app.evenea.pl/event/bbq4it-2022',
    id: 1,
    text: 'Zapisy na BBQ4IT',
  },
  {
    href: 'https://app.evenea.pl/event/bbdays4it-2022-hackbb/',
    id: 2,
    text: 'Zapisy na Hackathon',
  },
]

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  subtitlePos,
  backgroundImage,
  backgroundColor,
  buttonText,
  buttonUrl,
  isFirstHero,
}) => {
  const hasButton = buttonText && buttonUrl
  const hasSubtitle = subtitle

  const heroClasses = cx('hero', {
    '-full-height': hasSubtitle,
    '-simple': !hasButton && !hasSubtitle,
  })

  const titleClasses = cx('hero__title', { '-small': !hasSubtitle })

  return (
    <div
      className={heroClasses}
      style={{ backgroundColor: backgroundColor, backgroundImage: `url(${backgroundImage?.url}` }}>
      {hasSubtitle && subtitlePos === 'top' && <h3 className="hero__subtitle">{subtitle}</h3>}
      <h1 className={titleClasses}>{title}</h1>
      {hasSubtitle && subtitlePos === 'bottom' && <h3 className="hero__subtitle -bottom">{subtitle}</h3>}
      {!isFirstHero && hasButton && (
        <a className="hero__button" href={buttonUrl} rel="noopener noreferrer" target="_blank">
          {buttonText}
        </a>
      )}
      {isFirstHero && (
        <div className="hero__button-wrapper">
          {RegistrationLinks.map(({ href, id, text }) => (
            <a key={id} className="hero__button" href={href} rel="noopener noreferrer" target="_blank">
              {text}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Hero
