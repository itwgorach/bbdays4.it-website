import React from 'react'
import ImageYT from '../../../../YT.jpg'

const Recording = ({ videosData }: { videosData: string[] }) => {
  return (
    <div className="videos__controler">
      {videosData.map((video) => {
        return <img src={ImageYT} alt="YouTube" className="videos__video" />
      })}
    </div>
  )
}

export default Recording
