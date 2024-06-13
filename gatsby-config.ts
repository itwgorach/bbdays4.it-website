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
              achievements: {
                populate: '*',
              },
              backgroundImage: '*',
              backgroundImages: '*',
              backgroundVideo: {
                populate: '*',
              },
              bannerImage: '*',
              events: {
                populate: '*',
              },
              images: '*',
              lectures: {
                populate: '*',
              },
              partners: {
                populate: '*',
              },
              signup_sections: {
                populate: '*',
              },
              signupImage: '*',
              speakers: {
                populate: '*',
              },
            },
          },
        },
      },
      singularName: 'homepage',
    },
    {
      queryParams: {
        populate: {
          privacypolicy: {
            populate: '*',
          },
        },
      },
      singularName: 'privacypolicy',
    },
    {
      queryParams: {
        populate: {
          localizations: {
            populate: '*',
          },
          rules: {
            populate: '*',
          },
        },
      },
      singularName: 'rules',
    },
    {
      queryParams: {
        populate: {
          videospage: {
            populate: {
              backgroundImage: '*',
              backgroundImages: '*',
              backgroundVideo: {
                populate: '*',
              },
              bannerImage: '*',
              images: '*',
              video_lists: {
                populate: '*',
              },
            },
            subtitle: '*',
            footerSubtitle: '*',
          },
        },
      },
      singularName: 'videospage',
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
        background_color: '#359960',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
        name: 'BBDAYS4IT',
        short_name: 'BBDAYS4IT',
        start_url: '/',
        theme_color: '#359960',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: strapiConfig,
      resolve: 'gatsby-source-strapi',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-root-import',
    {
      options: {
        rule: {
          include: /src/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        useMozJpeg: true,
      },
      resolve: `gatsby-plugin-sharp`,
    },
  ],
  siteMetadata: {
    siteUrl: `https://bbdays4.it/`,
    title: `BB Days 4 IT :: 8-17 września 2023`,
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
