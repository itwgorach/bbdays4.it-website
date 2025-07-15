import path from 'path'
import { CreateSchemaCustomizationArgs, CreatePagesArgs } from 'gatsby'

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  createTypes(`
    type STRAPI_EVENT implements Node @dontInfer {
      id: ID!
      title: String
      startHour: String
      endHour: String
      date: String
      backgroundColor: String
      displayTitleOnDesktop: Boolean
      link: String
      locale: String
      eventSlug: String
      eventAddressText: String
      eventButtonText: String
      eventButtonUrl: String
      eventAddressUrl: String
      eventDescription: String
      eventSecondDescription: String
      eventSubtitle: String
      isSecondDescription: Boolean
      logo: UploadFile
      eventHero: UploadFile
      eventPicture: UploadFile
      eventSecondPicture: UploadFile
      localizations: STRAPI_EVENT_LOCALIZATIONS
    }
    
    type UploadFile {
      url: String
      id: String
      alternativeText: String
    }
    
    type STRAPI_EVENT_LOCALIZATIONS {
      data: [STRAPI_EVENT_LOCALIZATION_DATA]
    }
    
    type STRAPI_EVENT_LOCALIZATION_DATA {
      attributes: STRAPI_EVENT_LOCALIZATION_ATTRIBUTES
    }
    
    type STRAPI_EVENT_LOCALIZATION_ATTRIBUTES {
      title: String
      startHour: String
      endHour: String
      displayTitleOnDesktop: Boolean
      date: String
      eventDescription: String
      eventSecondDescription: String
      eventSubtitle: String
      eventButtonText: String
      eventAddressText: String
    }
  `)
}

exports.createPages = ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions

  return graphql(
    `
      {
        strapiComponentBaseSchedule {
          events {
            eventSlug
          }
        }
      }
    `,
    { limit: 1000 },
  ).then((result: any) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.strapiComponentBaseSchedule.events.map((event: any) => {
      if (event.eventSlug) {
        createPage({
          path: `/${event.eventSlug}`,
          component: path.resolve('./src/templates/EventDetails/EventDetails.tsx'),
          context: { slug: event.eventSlug },
        })
      }
    })
  })
}
