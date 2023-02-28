import { CloseButtonIcon } from 'components/icons'
import React from 'react'

type Props = {
  onToggle: () => void,
  videoUrl: string,
}

const VideoMode = ({ onToggle, videoUrl }: Props) => {
  return (
    <div className="hero__video-mode" onClick={onToggle}>
      <div className="hero__video-mode-container">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          width="100%"
        />
      </div>
      <CloseButtonIcon className="hero__video-mode__close-button" />
    </div>
  )
}

export default VideoMode
