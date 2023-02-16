import cx from 'classnames'
import LiveBanner from 'components/LiveBanner/LiveBanner'
import React, { FC } from 'react'

import { BaseHeroType } from 'types'
import { BackgroundVideo } from './BackgroundVideo'

const Hero: FC<BaseHeroType> = ({
  title,
  subtitle,
  subtitlePos,
  backgroundImage,
  backgroundColor,
  buttonText,
  buttonUrl,
  backgroundVideo,
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
      <LiveBanner />
      <BackgroundVideo {...backgroundVideo} />
      <div className="hero__content">
        {hasSubtitle && subtitlePos === 'top' && <h3 className="hero__subtitle">{subtitle}</h3>}
        <h1 className={titleClasses}>{title}</h1>
        {hasSubtitle && subtitlePos === 'bottom' && <h3 className="hero__subtitle -bottom">{subtitle}</h3>}
        {hasButton && (
          <a className="hero__button" href={buttonUrl} rel="noopener noreferrer" target="_blank">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

export default Hero
