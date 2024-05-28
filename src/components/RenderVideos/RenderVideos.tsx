import React, { useState } from 'react'

import Video from './Video'

const RenderVideos = ({ videosData }: any) => {
  const [showMore, setShowMore] = useState(false)

  const showMofeFn = () => {
    setShowMore((prevValue) => !prevValue)
    console.log('click')
  }

  return (
    <>
      <div className="videos__controler">
        {showMore
          ? videosData.map((video) => {
              return <Video key={video.videoUrl} {...video} />
            })
          : videosData.slice(0, 3).map((video) => {
              return <Video key={video.videoUrl} {...video} />
            })}
      </div>
      {videosData.length > 3 && !showMore && (
        <button onClick={showMofeFn} className="videos__video-button">
          Pokaż wszystkie prelekcje
        </button>
      )}
    </>
  )
}

export default RenderVideos
