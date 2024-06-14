import React, { useState } from 'react'
import { BaseVideosType, VideoType } from 'types'

import Video from './Video'
import { useLanguageContext } from 'contexts/LanguageContext'

const RenderVideos = ({ video_lists }: BaseVideosType) => {
  const [showMore, setShowMore] = useState(false)
  const { language } = useLanguageContext()

  const showMoreFn = () => {
    setShowMore((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="videos__controler">
        {showMore
          ? video_lists?.map((video) => {
              const videoData = video as VideoType
              return <Video key={videoData?.id} {...videoData} />
            })
          : video_lists?.slice(0, 3).map((video) => {
              const videoData = video as VideoType
              return <Video key={videoData?.id} {...videoData} />
            })}
      </div>
      {video_lists && video_lists.length > 3 && !showMore && (
        <button className="videos__video-button" onClick={showMoreFn}>
          {language === 'pl' ? 'Pokaż wszystkie prelekcje' : 'Show all lectures'}
        </button>
      )}
    </>
  )
}

export default RenderVideos
