import React from 'react'

const Video = ({ img, videoUrl, subtitle }) => {
  return (
    <div class="videos__video">
      <img src={img} alt="YouTube" class="videos__video-img" />
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <button class="videos__video-button videos__video-button-card">Zobacz</button>
      </a>
      <h3 class="videos__video-subtitle">{subtitle}</h3>
    </div>
  )
}

export default Video
