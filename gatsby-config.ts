import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

dotenv.config()

const strapiConfig = {
  accessToken: process.env.STRAPI_TOKEN,
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: [],
  singleTypes: [
    {
      queryParams: {
        populate: {
          homepage: {
            populate: {
              backgroundImage: '*',
              partners: {
                populate: '*',
              },
            },
          },
        },
      },
      singularName: 'homepage',
    },
  ],
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
    'gatsby-plugin-root-import',
    {
      options: {
        rule: {
          include: /src/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
  ],
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `BB Days 4 IT`,
  },
}
if (process.env.NODE_ENV === 'development') {
  config.plugins?.push({
    options: {
      outputPath: 'src/types/graphql-types.ts',
    },
    resolve: 'gatsby-plugin-typegen',
  })
}

export default config
