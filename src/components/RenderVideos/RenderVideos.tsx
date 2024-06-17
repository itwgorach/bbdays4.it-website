import React, { useState } from 'react'
import { BaseVideosType, VideoType } from 'types'

import { useLanguageContext } from 'contexts/LanguageContext'
import Video from './Video'

const RenderVideos = ({ video_lists: videoLists }: BaseVideosType) => {
  const [showMore, setShowMore] = useState(false)
  const { language } = useLanguageContext()

  const toggleShowMore = () => {
    setShowMore((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="videos__controler">
        {showMore
          ? videoLists?.map((video) => {
              const videoData = video as VideoType
              return <Video key={videoData?.id} {...videoData} />
            })
          : videoLists?.slice(0, 3).map((video) => {
              const videoData = video as VideoType
              return <Video key={videoData?.id} {...videoData} />
            })}
      </div>
      {videoLists && videoLists.length > 3 && !showMore && (
        <button className="videos__video-button" onClick={toggleShowMore}>
          {language === 'pl' ? 'Pokaż wszystkie prelekcje' : 'Show all lectures'}
        </button>
      )}
    </>
  )
}

export default RenderVideos
