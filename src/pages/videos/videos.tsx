import * as React from 'react'
import RenderVideos from 'components/RenderVideos'

const videosData = [
  'https://www.youtube.com/embed/Iwd9oP3B96U?si=OFCjHrwZND9Fjr_c',
  'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
  'https://www.youtube.com/embed/YvgbaRNjpdo?si=eMpkeqmommMus7xR',
  'https://www.youtube.com/embed/5MegiBGx6do?si=A42fiWoDm6Gg7Sql',
  'https://www.youtube.com/embed/7DeNpa_Wko4?si=ls5jyZRsB06PYmuN',
  'https://www.youtube.com/embed/0O6IynJo9z0?si=3UL_0ApWRiuXdtxz',
  'https://www.youtube.com/embed/frk94qdJgNI?si=exQ6zTf9vGZq7LEz',
  'https://www.youtube.com/embed/EPWHZYuzwUE?si=EwLyWxJfUXfy-xca',
  'https://www.youtube.com/embed/3-_7Z4rZ99A?si=PqcpWxKLlZkOnwxi',
  'https://www.youtube.com/embed/mri2PAXuYug?si=ujBt9xE14CwBAO28',
  'https://www.youtube.com/embed/50AluYEdCSQ?si=m8_8_CDroeq1joAd',
  'https://www.youtube.com/embed/ZyxBdBE64jA?si=aG1EImwWkgPPKJeV',
  'https://www.youtube.com/embed/4Bq-BgriJB4?si=5ZmaDxhgrxxv4289',
  'https://www.youtube.com/embed/60V6FpQv2HI?si=Gl8Iwvq7FDPG59gy',
  'https://www.youtube.com/embed/Lv0gM_-xbfM?si=Jcl6NaGy-vgJKt-V',
  'https://www.youtube.com/embed/I6w0tjK3L7I?si=tezdKNICtTT99onE',
  'https://www.youtube.com/embed/YogtIf52-D8?si=JE5cqqXUTaXm7DVm',
  'https://www.youtube.com/embed/rzK6SycV1UM?si=YtpVRr1qxFs4oh8u',
  'https://www.youtube.com/embed/zIo-gbbqBNc?si=XVqvPNtaStlhwztB',
]

const videos = () => {
  return (
    <div className="videos">
      <h1 className="videos__title">Youtube playlist</h1>
      <RenderVideos videosData={videosData} />
    </div>
  )
}

export default videos
