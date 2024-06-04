import React, { useState } from 'react'
import { BaseVideosType, VideoType } from 'types'

import Video from './Video'

const RenderVideos = ({ video_lists }: BaseVideosType) => {
  const [showMore, setShowMore] = useState(false)

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
        <button onClick={showMoreFn} className="videos__video-button">
          Pokaż wszystkie prelekcje
        </button>
      )}
    </>
  )
}

export default RenderVideos
