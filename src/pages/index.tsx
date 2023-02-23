import React, { FC, useMemo } from 'react'
import { graphql } from 'gatsby'

import HomePageType from 'types/HomePageType'
import Hero from 'components/Hero'
import { BaseGalleryType, BaseHeroType, PartnersType, SpeakersType, ScheduleType, SignupType, AgendaType, VideoSectionType } from 'types'
import Partners from 'components/Partners'
import Gallery from 'components/Gallery'
import Speakers from 'components/Speakers'
import Schedule from 'components/Schedule'
import Signup from 'components/Signup'
import Agenda from 'components/Agenda'
import VideoSection from 'components/VideoSection'

const HomePage: FC<HomePageType> = ({
  data: {
    strapiHomepage: { homepage },
  },
  location, 
}) => {
  const content = useMemo(
    () =>
      homepage?.map((component) => {
        if(!component?.isSectionVisible) {
          return null
        }
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
          case 'base.signup-grid': {
            const signup = component as SignupType
            return <Signup key={signup.id} {...signup} />
          }
          case 'base.agenda': {
            const agenda = component as AgendaType
            return <Agenda key={agenda.id} {...agenda} location={location} />
          }
          case 'base.video-section': {
            const section = component as VideoSectionType
            return <VideoSection {...section} />
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
                  }
              }
              ... on STRAPI__COMPONENT_BASE_SCHEDULE {
                  id
                  scheduleTitle
                  strapi_component
                  isSectionVisible
                  events {
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

export default HomePage
