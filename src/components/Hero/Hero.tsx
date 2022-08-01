import cx from 'classnames'
import React, { FC } from 'react'

import { BaseHeroType } from 'types'

const Hero: FC<BaseHeroType> = ({
  title,
  subtitle,
  subtitlePos,
  backgroundImage,
  buttonText,
  buttonUrl,
  backgroundColor,
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
          <a
            className="hero__button"
            href="https://app.evenea.pl/event/bbdays4it-2022-konferencja-ATH"
            rel="noopener noreferrer"
            target="_blank">
            Zapisy na Konferencję
          </a>
          <a
            className="hero__button"
            href="https://app.evenea.pl/event/bbq4it-2022"
            rel="noopener noreferrer"
            target="_blank">
            Zapisy na BBQ4IT
          </a>
        </div>
      )}
    </div>
  )
}

export default Hero
