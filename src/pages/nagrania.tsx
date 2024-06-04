import React from 'react'
import { graphql } from 'gatsby'
import RenderVideos from 'components/RenderVideos'
import Hero from 'components/Hero'
import ImageYT from '../../../YT.jpg'
import Gallery from 'components/Gallery'

const videosData = [
  {
    img: ImageYT,
    videoUrl: 'https://www.youtube.com/embed/B4CFseJDkFU?si=OBh3RKPCZTY3Q6tU',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quibusdam?',
  },
]
const Videos = ({ data }) => {
  const {
    strapiVideospage: { subtitle, footerSubtitle, videospage },
  } = data

  return (
    <>
      <div className="videos">
        {videospage?.map((sectionData) => {
          if (!sectionData?.isSectionVisible) {
            return null
          }
          switch (sectionData?.strapi_component) {
            case 'base.hero': {
              return (
                <>
                  <Hero {...sectionData} />
                  {subtitle && <p className="videos__subtitle">{subtitle}</p>}
                </>
              )
            }
            case 'base.videos-list': {
              return <RenderVideos {...sectionData} />
            }
            case 'base.galery-slider': {
              return <Gallery key={sectionData.id} {...sectionData} />
            }
          }
        })}

        {footerSubtitle && <p className="videos__subtitle">{footerSubtitle}</p>}
      </div>
    </>
  )
}

export const query = graphql`
  {
    strapiVideospage {
      subtitle
      footerSubtitle
      videospage {
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
        ... on STRAPI__COMPONENT_BASE_VIDEOS_LIST {
          id
          isSectionVisible
          video_lists {
            videoUrl
            subtitle
            thumbnail {
              url
              alternativeText
            }
            id
          }
          strapi_component
        }
      }
    }
  }
`

export default Videos
