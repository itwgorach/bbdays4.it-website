import * as React from 'react'

const RenderVideos = ({ videosData }) => {
  return videosData.map((video) => (
    <iframe
      className="video__controler-video"
      src={video}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
  ))
}

export default RenderVideos
