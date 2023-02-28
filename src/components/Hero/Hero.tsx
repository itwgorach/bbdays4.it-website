import { socialLinks } from 'constants/constants'
import cx from 'classnames'
import { PlayButtonIcon } from 'components/icons'
import LiveBanner from 'components/LiveBanner/LiveBanner'
import React, { FC, useState } from 'react'

import { BaseHeroType } from 'types'
import { useMediaQuery } from 'react-responsive'
import { BackgroundVideo } from './BackgroundVideo'
import VideoMode from './VideoMode'

const Hero: FC<BaseHeroType> = ({
  title,
  subtitle,
  subtitlePos,
  backgroundImage,
  backgroundColor,
  buttonText,
  buttonUrl,
  backgroundVideo,
  videoId,
  footer,
}) => {
  const hasButton = buttonText && buttonUrl && !videoId
  const hasVideo = videoId
  const hasSubtitle = subtitle
  const [videoMode, setVideoMode] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  const heroClasses = cx('hero -full-height', {
    '-full-height': hasSubtitle && !hasVideo,
    '-simple': !hasButton && !hasSubtitle && !hasVideo,
    '-with-video': hasVideo,
  })

  const titleClasses = cx('hero__title', { '-small': !hasSubtitle && !hasVideo })

  const handleVideoModeToggle = () => {
    setVideoMode((prev) => !prev)
  }

  const videoUrl = `https://www.youtube.com/embed/${videoId}?showinfo=1&controls=1&modestbranding=1&autoplay=1&start=1`

  return (
    <div
      className={heroClasses}
      style={{ backgroundColor: backgroundColor, backgroundImage: `url(${backgroundImage?.url}` }}>
      {videoMode ? (
        <VideoMode videoUrl={videoUrl} onToggle={handleVideoModeToggle} />
      ) : (
        <div className="hero__content">
          <LiveBanner />
          {backgroundVideo && <BackgroundVideo {...backgroundVideo} />}
          <div className="hero__content-wrapper">
            {hasSubtitle && subtitlePos === 'top' && <h3 className="hero__subtitle">{subtitle}</h3>}
            <h1 className={titleClasses}>{title}</h1>
            {hasSubtitle && subtitlePos === 'bottom' && <h3 className="hero__subtitle -bottom">{subtitle}</h3>}
            {hasButton && (
              <a className="hero__button" href={buttonUrl} rel="noopener noreferrer" target="_blank">
                {buttonText}
              </a>
            )}
            {hasVideo && <PlayButtonIcon className="hero__video-mode-play-button" onClick={handleVideoModeToggle} />}
          </div>
          {footer && (
            <div className="hero__content-footer">
              <div>{footer}</div>
              {isDesktop && (
                <div className="hero__content-footer-icons">
                  {socialLinks.map(({ href, Icon, name }) => (
                    <a key={href} href={href} rel="noopener noreferrer" target="_blank">
                      <Icon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Hero
