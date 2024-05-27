import React from 'react'

const Video = ({ src }) => {
  return (
    <div class="videos__video">
      <img src={src} alt="YouTube" class="videos__video-img" />
      <button class="videos__video-button">Zobacz</button>
      <h3 class="videos__video-subtitle">
        "Historia za małego przycisku" czyli opowieść o tym, jak nasze codzienne, frontendowe wybory mają ogromny wpływ
        na życie innych". Łukasz Jakubowski - developer z wieloletnim doświadczeniem, w swojej prezentacji podywaguje
        nieco o tym dlaczego warto pisać kod zgodnie z zasadami oraz dlaczego dostępność aplikacji jest tak ważna
      </h3>
    </div>
  )
}

export default Video
