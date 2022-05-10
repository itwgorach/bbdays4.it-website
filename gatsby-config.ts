import type { GatsbyConfig } from 'gatsby'

require('dotenv').config()

const strapiConfig = {
  accessToken: process.env.STRAPI_TOKEN,
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ['post', 'partner', 'speaker'],
  singleTypes: [],
}

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      options: {
        icon: 'src/images/icon.png',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: strapiConfig,
      resolve: 'gatsby-source-strapi',
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `BB Days 4 IT`,
  },
}

export default config
