import { CloseButtonIcon } from 'components/icons'
import React from 'react'
import cx from 'classnames'

type Props = {
  onToggle: () => void,
  videoUrl: string,
  showOverlay: boolean,
  videoMode: boolean,
}

const VideoMode = ({ onToggle, videoUrl, showOverlay, videoMode }: Props) => {
  const overlayClasses = cx('hero__video-mode', {
    '-hidden': showOverlay && !videoMode,
  })

  return (
    <div className={overlayClasses} onClick={onToggle}>
      <div className="hero__video-mode-container">
        {videoMode && (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            height="100%"
            loading="lazy"
            src={videoUrl}
            title="YouTube video player"
            width="100%"
          />
        )}
      </div>
      <CloseButtonIcon className="hero__video-mode__close-button" />
    </div>
  )
}

export default VideoMode
