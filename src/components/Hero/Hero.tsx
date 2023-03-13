import { c4pUrl, socialLinks } from 'constants/constants'
import cx from 'classnames'
import { PlayButtonIcon } from 'components/icons'
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
  const [showVideoOverlay, setShowVideoOverlay] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  const heroClasses = cx('hero -full-height', {
    '-full-height': hasSubtitle && !hasVideo,
    '-simple': !hasButton && !hasSubtitle && !hasVideo,
    '-with-video': hasVideo,
  })

  const titleClasses = cx('hero__title', { '-small': !hasSubtitle && !hasVideo })
  const heroContentClasses = cx('hero__content', { '-hidden': videoMode })

  const handleVideoModeToggle = () => {
    setShowVideoOverlay((prev) => !prev)

    if (!videoMode) {
      setTimeout(() => {
        setVideoMode((prev) => !prev)
      }, 500)

      setTimeout(() => {
        setShowContent((prev) => !prev)
      }, 1000)

      return
    }

    setShowContent((prev) => !prev)
    setVideoMode((prev) => !prev)
  }

  const subtitleLines = subtitle?.split(/\r?\n/)

  const videoUrl = `https://www.youtube.com/embed/${videoId}?showinfo=1&controls=1&modestbranding=1&autoplay=1&start=1`

  return (
    <div
      className={heroClasses}
      style={{ backgroundColor: backgroundColor, backgroundImage: `url(${backgroundImage?.url}` }}>
      {showVideoOverlay && (
        <VideoMode
          showOverlay={showVideoOverlay}
          videoMode={videoMode}
          videoUrl={videoUrl}
          onToggle={handleVideoModeToggle}
        />
      )}
      {showContent && (
        <div className={heroContentClasses}>
          {backgroundVideo && <BackgroundVideo {...backgroundVideo} />}
          <div className="hero__content-wrapper">
            {hasSubtitle && subtitlePos === 'top' && <h3 className="hero__subtitle">{subtitle}</h3>}
            <h1 className={titleClasses}>{title}</h1>
            {hasSubtitle &&
              subtitlePos === 'bottom' &&
              subtitleLines?.map((subtitleLine, index) => (
                <h3 key={index} className="hero__subtitle -bottom">
                  {subtitleLine}
                </h3>
              ))}
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
              {isDesktop ? (
                <div className="hero__content-footer-icons">
                  {socialLinks.map(({ href, Icon, name }) => (
                    <a key={href} href={href} rel="noopener noreferrer" target="_blank">
                      <Icon />
                    </a>
                  ))}
                </div>
              ) : (
                <a className="hero__content-footer-button" href={c4pUrl} rel="noopener noreferrer" target="_blank">
                  Zostań prelegentem
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Hero
