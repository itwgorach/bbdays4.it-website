require('dotenv').config()
import type { GatsbyConfig } from 'gatsby'

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['post', 'speaker', 'partner'],
  singleTypes: [],
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `bbdays-website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
  ],
}

export default config
