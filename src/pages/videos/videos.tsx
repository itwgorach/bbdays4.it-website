import * as React from 'react'
import RenderVideos from 'components/RenderVideos'

const videosData = [
  'https://www.youtube.com/embed/Iwd9oP3B96U?si=LAMamqU-RZepmxJG',
  'https://www.youtube.com/embed/Iwd9oP3B96U?si=LAMamqU-RZepmxJG',
  'https://www.youtube.com/embed/Iwd9oP3B96U?si=LAMamqU-RZepmxJG',
]

const videos = () => {
  return (
    <>
      <h1>Youtube playlist</h1>
      <div className="video-controler">
        <RenderVideos videosData={videosData} />
      </div>
    </>
  )
}

export default videos
