import React, { FC, useMemo } from 'react'
import { graphql } from 'gatsby'

import HomePageType from 'types/HomePageType'
import Hero from 'components/Hero'
import { BaseHeroType, PartnersType } from 'types'
import Partners from 'components/Partners'

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
            return <Partners key={partnersSection.id} partners={partnersSection.partners} sectionTitle={partnersSection.sectionTittle}  />
          }
          case 'base.hero':
          {
            // eslint-disable-next-line prettier/prettier
            const hero = component as BaseHeroType
            return <Hero key={hero.id} {...hero} />
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
              ... on STRAPI__COMPONENT_BASE_HERO {
                  id
                  backgroundColor
                  buttonUrl
                  buttonText
                  subtitle
                  title
                  strapi_component
                  backgroundImage {
                      url
                  }
              }
              ... on STRAPI__COMPONENT_BASE_PARTNERS_SLIDER {
                  id
                  sectionTittle
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
          }
      }  }
`

export default HomePage
