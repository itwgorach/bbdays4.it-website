import { graphql } from 'gatsby'
import React from 'react'

const EventDetails = ({ data, pageContext }) => {
  const { events } = data.strapiComponentBaseSchedule
  const { slug } = pageContext

  const event = events.find((event) => event.eventSlug === slug)
  const [day, month] = event.date.split('.')
  const months = [
    'Stycznia',
    'Lutego',
    'Marca',
    'Kwietnia',
    'Maja',
    'Czerwca',
    'Lipca',
    'Sierpnia',
    'Września',
    'Października',
    'Listopada',
    'Grudnia',
  ]
  const nameOfMonth = months[parseInt(month) - 1]

  // Złożenie nowej daty w formacie "dzień - miesiąc"
  const newDate = `${day} - ${nameOfMonth}`

  if (!event) {
    return <div>Event nie znaleziony</div>
  }

  return (
    <div className="event-details">
      <div className="hero">
        <img src={event.eventHero.url} alt={event.title} className="hero-image" />
        <div className="hero-content">
          <h1>{event.title}</h1>
          <h2>{event.eventSubtitle}</h2>
        </div>
      </div>
      <div className="controler">
        <div className="controler-description">
          <img src={event.eventPicture.url} alt={event.title} className="controler-description-event-image" />
          <p>{event.eventDescription}</p>
        </div>
        <div className="controler-info">
          <p>
            <span>{newDate}</span>
          </p>
          <p>
            {event.startHour} - <span>{event.endHour}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    strapiComponentBaseSchedule {
      events {
        eventHero {
          url
          id
        }
        backgroundColor
        date
        endHour
        eventDescription
        eventPicture {
          url
          id
        }
        eventSlug
        eventSubtitle
        id
        startHour
        title
      }
    }
  }
`

export default EventDetails
