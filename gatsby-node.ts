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

    const existingSlugs: string[] = []

    // [...new Set(result.data.strapiComponentBaseSchedule.events)].map((event) => {
    result.data.strapiComponentBaseSchedule.events.map((event) => {
      if (event.eventSlug) {
        if (existingSlugs.includes(event.eventSlug)) {
          return
        }

        existingSlugs.push(event.eventSlug)

        createPage({
          path: `/${event.eventSlug}`,
          component: path.resolve('./src/templates/EventDetails/EventDetails.tsx'),
          context: { slug: event.eventSlug },
        })
      }
    })
  })
}
