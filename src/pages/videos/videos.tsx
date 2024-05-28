import React from 'react'
import RenderVideos from 'components/RenderVideos'
import Hero from 'components/Hero'
import heroImg from '../../../../Hero_videos.jpg'
import ImageYT from '../../../../YT.jpg'
import Gallery from 'components/Gallery'

const videosData = [
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
]
const heroData = {
  title: 'Zobaczcie sami jak minął \n najdłuższy festiwal technologiczny w Polsce!',
  backgroundImage: { url: heroImg },
  backgroundColor: '#389381',
  backgroundVideo: 'https://youtu.be/Iwd9oP3B96U',
  videoId: 'Iwd9oP3B96U',
  footer: 'Zostańcie z nami na dłużej! 👇👇👇',
}
const subtitlePageData =
  'Ten rok był dla festiwalu wyjątkowy, obok kultowych wydarzeń jak Konferencja na Uniwersytecie Bielsko-Bialskimi  uwielbianym BBQ4IT, ogrom nowości - Turniej Esportowy, Mistrzostwa branży IT w Enduro, Coder Dojo w międzynarodowym formacie. 😎'
const footerSubtitleData = 'Też nie możecie doczekać się kolejnej edycji? 🤔'

const videos = () => {
  return (
    <>
      <Hero {...heroData} />
      <div className="videos">
        <p className="videos__subtitle">{subtitlePageData}</p>
        <RenderVideos videosData={videosData} />
        <Gallery />
        <p className="videos__subtitle">{footerSubtitleData}</p>
      </div>
    </>
  )
}

export default videos
