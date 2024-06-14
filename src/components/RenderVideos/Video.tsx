import { useLanguageContext } from 'contexts/LanguageContext'
import React, { FC } from 'react'
import { VideoType } from 'types'

const Video: FC<VideoType> = ({ thumbnail, videoUrl, subtitle }) => {
  const { language } = useLanguageContext()
  return (
    <div className="videos__video">
      <img alt={thumbnail?.alternativeText} className="videos__video-img" src={thumbnail?.url} />
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <button className="videos__video-button videos__video-button-card">
          {language === 'pl' ? 'Zobacz' : 'See'}
        </button>
      </a>
      <h3 className="videos__video-subtitle">{subtitle}</h3>
    </div>
  )
}

export default Video
