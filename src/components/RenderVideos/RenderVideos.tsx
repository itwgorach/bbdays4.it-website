import React, { useState } from 'react'

import Video from './Video'

const RenderVideos = ({ video_lists }: any) => {
  const [showMore, setShowMore] = useState(false)
  console.log(video_lists)

  const showMoreFn = () => {
    setShowMore((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="videos__controler">
        {showMore
          ? video_lists.map((video) => {
              return <Video key={video.id} {...video} />
            })
          : video_lists.slice(0, 3).map((video) => {
              return <Video key={video.id} {...video} />
            })}
      </div>
      {video_lists.length > 3 && !showMore && (
        <button onClick={showMoreFn} className="videos__video-button">
          Pokaż wszystkie prelekcje
        </button>
      )}
    </>
  )
}

export default RenderVideos
