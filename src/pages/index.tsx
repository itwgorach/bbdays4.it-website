import React, { FC } from 'react'
import { graphql } from 'gatsby'

import HomePageType from 'types/HomePageType'
import Hero from 'components/Hero'
import { BaseHeroType } from 'types'

const HomePage: FC<HomePageType> = ({
  data: {
    strapiHomepage: { hero: heros },
  },
}) => {
  return (
    <>
      {heros?.map((hero: BaseHeroType) => (
        <Hero key={hero.id} {...hero} />
      ))}
    </>
  )
}

export const query = graphql`
  {
    strapiHomepage {
      hero {
        buttonText
        buttonUrl
        id
        subtitle
        title
        strapi_id
        backgroundImage {
          id
          url
        }
        backgroundColor
      }
    }
  }
`

export default HomePage
