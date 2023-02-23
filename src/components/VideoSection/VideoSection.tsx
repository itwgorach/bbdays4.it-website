import { ArrowDownIcon, ArrowIcon, EyeIcon, PlayButtonIcon } from 'components/icons'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { VideoSectionType } from 'types'

const VideoSection = ({ title, article, videoId, footer }: VideoSectionType) => {
  const [display, setDisplay] = useState(true)
  const isMobile = useMediaQuery({ maxWidth: 1200 })

  const handleThumbnailClick = () => setDisplay(false)

  return (
    <div className="video-section">
      <div className="video-section__container">
        {(title || article) && (
          <div className="video-section__content">
            <div className="video-section__content-wrapper">
              {title && <h1 className="content-title">{title}</h1>}
              {article && <article className="content-article">{article}</article>}
            </div>
            {footer && (
              <div className="video-section__content-footer">
                {footer}
                <div className="footer-icons">
                  <EyeIcon />
                  {isMobile ? <ArrowDownIcon /> : <ArrowIcon />}
                </div>
              </div>
            )}
          </div>
        )}
        {videoId && (
          <div className="video-section__video">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?showinfo=0&autohide=1&modestbranding=1&autoplay=${
                display ? 0 : 1
              }`}
              title="YouTube video player"
              width="100%"
            />
            {display && (
              <div
                className="thumbnail"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${videoId}/sddefault.jpg)`,
                }}>
                <PlayButtonIcon onClick={handleThumbnailClick} />
              </div>
            )}
            <div className="decorator" />
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoSection
