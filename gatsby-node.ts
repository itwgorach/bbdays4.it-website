import path from 'path'

exports.createPages = ({ graphql, actions }) => {
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
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const existingEventSlugs: string[] = []

    result.data.strapiComponentBaseSchedule.events.map(({ eventSlug }) => {
      if (eventSlug) {
        if (existingEventSlugs.includes(eventSlug)) {
          return
        }

        existingEventSlugs.push(eventSlug)

        createPage({
          path: `/${eventSlug}`,
          component: path.resolve('./src/templates/EventDetails/EventDetails.tsx'),
          context: { slug: eventSlug },
        })
      }
    })
  })
}
