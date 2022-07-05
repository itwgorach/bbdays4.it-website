import React, { FC, useMemo } from 'react'
import { graphql } from 'gatsby'

import HomePageType from 'types/HomePageType'
import Hero from 'components/Hero'
import { BaseGalleryType, BaseHeroType, PartnersType, ScheduleType } from "types";
import Partners from 'components/Partners'
import Gallery from 'components/Gallery'
import Schedule from 'components/Schedule';

const HomePage: FC<HomePageType> = ({
  data: {
    strapiHomepage: { homepage },
  },
}) => {

  const content = useMemo(
    () =>
      homepage?.map((component) => {
        switch (component.strapi_component) {
          case 'base.partners-slider':
          {
            // eslint-disable-next-line prettier/prettier
            const partnersSection = component as PartnersType
            return <Partners key={partnersSection.id} partners={partnersSection.partners} sectionTitle={partnersSection.sectionTitle}  />
          }
          case 'base.hero':
          {
            // eslint-disable-next-line prettier/prettier
            const hero = component as BaseHeroType
            return <Hero key={hero.id} {...hero} />
          }
          case 'base.galery-slider':
          {
            // eslint-disable-next-line prettier/prettier
            const gallery = component as BaseGalleryType
            return <Gallery key={gallery.id} images={gallery.images}/>
          }
          case 'base.schedule':
          {
            //eslint-disable-nexi-line prettier/prettier
            const schedule = component as ScheduleType
            return <Schedule key={schedule.id} events={schedule.events} scheduleTitle={schedule.scheduleTitle} /> 
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
      }  }
`

export default HomePage
