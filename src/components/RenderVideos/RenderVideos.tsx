import React from 'react'
import ImageYT from '../../../../YT.jpg'
import Video from './Video'

const RenderVideos = ({ videosData }: { videosData: string[] }) => {
  return (
    <div className="videos__controler">
      {videosData.map((video) => {
        return <Video key={video} src={ImageYT} />
      })}
    </div>
  )
}

export default RenderVideos
