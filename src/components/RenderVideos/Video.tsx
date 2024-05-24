import React from 'react'

const Video = ({ src }) => {
  return (
    <div className="videos__video">
      <div>
        <img src={src} alt="YouTube" className="videos__video-img" />
        <div>
          <h2 className="videos__video-title">TITLE</h2>
          <h3 className="videos__video-subtitle">Subtitle</h3>
        </div>
      </div>
    </div>
  )
}

export default Video
