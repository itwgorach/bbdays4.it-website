import React from 'react'

export const BackgroundVideo = ({
  webm,
  mp4,
}: {
  webm?: GatsbyTypes.STRAPI__MEDIA,
  mp4?: GatsbyTypes.STRAPI__MEDIA,
}) => {
  return (
    <video autoPlay className="hero__video" loop muted preload="metadata">
      {webm?.url && <source src={webm?.url} type="video/webm" />}
      {mp4?.url && <source src={mp4?.url} type="video/mp4" />}
    </video>
  )
}
