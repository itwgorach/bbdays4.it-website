import React, { FC, useMemo } from 'react'
import { graphql } from 'gatsby'

import HomePageType from 'types/HomePageType'
import Hero from 'components/Hero'
import { BaseGalleryType, BaseHeroType, PartnersType, SpeakersType, ScheduleType } from 'types'
import Partners from 'components/Partners'
import Gallery from 'components/Gallery'
import Speakers from 'components/Speakers'
import Schedule from 'components/Schedule'

const HomePage: FC<HomePageType> = ({
  data: {
    strapiHomepage: { homepage },
  },
}) => {
  const content = useMemo(
    () =>
      homepage?.map((component) => {
        switch (component?.strapi_component) {
          case 'base.partners-slider': {
            const partnersSection = component as PartnersType
            return <Partners key={partnersSection.id} partners={partnersSection.partners} sectionTitle={partnersSection.sectionTitle} />
          }
          case 'base.hero': {
            const hero = component as BaseHeroType
            return <Hero key={hero.id} {...hero} />
          }
          case 'base.galery-slider': {
            const gallery = component as BaseGalleryType
            return <Gallery key={gallery.id} images={gallery.images} />
          }
          case 'base.speakers-grid': {
            const speakers = component as SpeakersType
            return <Speakers key={speakers.id} {...speakers} />
          }
          case 'base.schedule': {
            const schedule = component as ScheduleType
            return <Schedule key={schedule.id} {...schedule} />
          }
          default:
            return null
        }
      }),
    [homepage],
  )

  return (
    <>
      {content}
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
                images {
                  id
                  url
                }
                strapi_component
              }
              ... on STRAPI__COMPONENT_BASE_HERO {
                  id
                  backgroundColor
                  buttonUrl
                  buttonText
                  subtitle
                  subtitlePos
                  title
                  strapi_component
                  backgroundImage {
                      url
                  }
              }
              ... on STRAPI__COMPONENT_BASE_PARTNERS_SLIDER {
                  id
                  sectionTitle
                  strapi_component
                  partners {
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
                  strapi_component
                  speakers {
                      firstName
                      lastName
                      title
                      photo {
                        url
                      }
                      description
                      position
                  }
              }
              ... on STRAPI__COMPONENT_BASE_SCHEDULE {
                  id
                  scheduleTitle
                  strapi_component
                  events {
                      title
                      startHour
                      endHour
                      date
                      backgroundColor
                      displayTitleOnDesktop
                      logo {
                          url
                      }
                  }
              }
          }
      } 
    }
`

export default HomePage