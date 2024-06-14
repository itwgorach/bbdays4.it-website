import React, { FC, useMemo } from 'react'
import { graphql } from 'gatsby'
import VideosPageType from 'types/VideosPageType'
import { BaseGalleryType, BaseHeroType, BaseVideosType } from 'types'
import RenderVideos from 'components/RenderVideos'
import Hero from 'components/Hero'
import Gallery from 'components/Gallery'
import { useLanguageContext } from 'contexts/LanguageContext'
import getPolishVideosPage from 'utils/getPolishVideosPage'
import getEnglishVideosPage from 'utils/getEnglishVideosPage'

const Videos: FC<VideosPageType> = ({ data }) => {
  const { language } = useLanguageContext()

  const [subtitle, footerSubtitle, videospage] =
    language === 'pl' ? getPolishVideosPage(data) : getEnglishVideosPage(data)

  const content = useMemo(
    () => (
      <>
        <div className="videos">
          {videospage?.map((sectionData) => {
            if (!sectionData?.isSectionVisible) {
              return null
            }
            switch (sectionData?.strapi_component) {
              case 'base.hero': {
                const hero = sectionData as BaseHeroType
                return (
                  <>
                    <Hero key={hero.id} {...hero} />
                    {subtitle && <p className="videos__subtitle">{subtitle}</p>}
                  </>
                )
              }
              case 'base.videos-list': {
                const videos = sectionData as BaseVideosType
                return <RenderVideos {...videos} />
              }
              case 'base.galery-slider': {
                const gallery = sectionData as BaseGalleryType
                return <Gallery key={gallery.id} {...gallery} />
              }
            }
          })}

          {footerSubtitle && <p className="videos__subtitle">{footerSubtitle}</p>}
        </div>
      </>
    ),

    [videospage, subtitle, footerSubtitle],
  )

  return <>{content}</>
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
            localizations {
              data {
                attributes {
                  videoUrl
                  subtitle
                  locale
                }
              }
            }
          }
          strapi_component
        }
      }
      localizations {
        data {
          attributes {
            subtitle
            footerSubtitle
            locale
            videospage {
              title
              isSectionVisible
              footer
              buttonUrl
              buttonText
              _xcomponent
            }
          }
        }
      }
    }
  }
`

export default Videos
