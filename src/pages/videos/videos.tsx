import React from 'react'
import { graphql } from 'gatsby'
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
  // backgroundVideo: 'https://youtu.be/Iwd9oP3B96U',
  videoId: 'Iwd9oP3B96U',
  footer: 'Zostańcie z nami na dłużej! 👇👇👇',
}
const subtitlePageData =
  'Ten rok był dla festiwalu wyjątkowy, obok kultowych wydarzeń jak Konferencja na Uniwersytecie Bielsko-Bialskimi  uwielbianym BBQ4IT, ogrom nowości - Turniej Esportowy, Mistrzostwa branży IT w Enduro, Coder Dojo w międzynarodowym formacie. 😎'
const footerSubtitleData = 'Też nie możecie doczekać się kolejnej edycji? 🤔'

const videos = ({ data }) => {
  console.log('------------------------------')
  console.log(data)
  console.log('------------------------------')

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

export const query = graphql`
  {
    strapiHomepage {
      homepage {
        ... on STRAPI__COMPONENT_BASE_GALERY_SLIDER {
          id
          title
          buttonUrl
          buttonText
          images {
            id
            url
          }
          strapi_component
          isSectionVisible
        }
        ... on STRAPI__COMPONENT_BASE_HERO {
          id
          backgroundColor
          buttonUrl
          buttonText
          subtitle
          subtitlePos
          title
          videoId
          footer
          backgroundVideo {
            webm {
              url
            }
            mp4 {
              url
            }
          }
          strapi_component
          isSectionVisible
          backgroundImage {
            url
          }
        }
        ... on STRAPI__COMPONENT_BASE_PARTNERS_SLIDER {
          id
          sectionTitle
          strapi_component
          isSectionVisible
          partners {
            index
            id
            Name
            WebsiteURL
            Logo {
              url
            }
            whiteLogo {
              url
            }
          }
        }
        ... on STRAPI__COMPONENT_BASE_SPEAKERS_GRID {
          id
          sectionTitle
          sectionSubtitle
          strapi_component
          isSectionVisible
          speakers {
            index
            firstName
            lastName
            title
            photo {
              url
            }
            description
            position
            linkedinUrl
            twitterUrl
            linktrUrl
            backgroundColor
            bio
          }
        }
        ... on STRAPI__COMPONENT_BASE_SCHEDULE {
          id
          scheduleTitle
          strapi_component
          isSectionVisible
          events {
            id
            title
            startHour
            endHour
            date
            backgroundColor
            displayTitleOnDesktop
            link
            logo {
              url
            }
          }
        }
        ... on STRAPI__COMPONENT_BASE_SIGNUP_GRID {
          id
          signupImage {
            url
          }
          bannerImage {
            url
          }
          strapi_component
          isSectionVisible
          signup_sections {
            buttonText
            buttonUrl
            title
            subtitle
            link
          }
        }
        ... on STRAPI__COMPONENT_BASE_AGENDA {
          id
          title
          subtitle
          strapi_component
          isSectionVisible
          lectures {
            title
            subtitle
            room
            startHour
            backgroundColor
            logo {
              url
            }
          }
          speakers {
            firstName
            lastName
            title
            photo {
              url
            }
            description
            position
            linkedinUrl
            twitterUrl
            linktrUrl
            backgroundColor
          }
        }
        ... on STRAPI__COMPONENT_BASE_FESTIVAL_IN_NUMBERS {
          id
          strapi_component
          isSectionVisible
          backgroundImages {
            id
            url
          }
          achievements {
            id
            name
            number
            index
          }
        }
        ... on STRAPI__COMPONENT_BASE_VIDEO_SECTION {
          id
          title
          article
          footer
          isSectionVisible
          videoId
          strapi_component
        }
      }
    }
  }
`

export default videos
