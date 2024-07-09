import STRAPI__COMPONENT_BASE_SCHEDULE = GatsbyTypes.STRAPI__COMPONENT_BASE_SCHEDULE

type EventDetailsType = {
  data: {
    strapiComponentBaseSchedule: STRAPI__COMPONENT_BASE_SCHEDULE
  }
  pageContext: { slug: string }
}

export default EventDetailsType
