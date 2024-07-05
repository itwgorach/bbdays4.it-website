import { useLanguageContext } from 'contexts/LanguageContext'
import { graphql } from 'gatsby'
import React from 'react'

const EventDetails = ({ data, pageContext }) => {
  const { events } = data.strapiComponentBaseSchedule
  const { slug } = pageContext
  const { language } = useLanguageContext()

  const lang = language === 'pl' ? true : false
  const monthsPl = [
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
  const monthsEn = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const event = events.find((event) => event.eventSlug === slug)
  const [day, month] = event.date.split('.')
  const nameOfMonth = lang ? monthsPl[parseInt(month) - 1] : monthsEn[parseInt(month) - 1]
  const newDate = `${day} - ${nameOfMonth}`

  if (!event) {
    return <div>Event nie znaleziony</div>
  }

  return (
    <div className="event-details">
      <div className="hero">
        <div className="hero-gray" />
        <img src={event.eventHero.url} alt={event.title} className="hero-image" />
        <div className="hero-content">
          <h1>{lang ? event.title : event.localizations.data[0].attributes.title}</h1>
          <h2>{lang ? event.eventSubtitle : event.localizations.data[0].attributes.eventSubtitle}</h2>
          {event.eventButtonText && event.eventButtonUrl && (
            <a className="hero-content-button" href={event.eventButtonUrl} rel="noopener noreferrer" target="_blank">
              {lang ? event.eventButtonText : event.localizations.data[0].attributes.eventButtonText}
            </a>
          )}
        </div>
      </div>
      <div className="controler">
        <div className="controler-description">
          <img
            src={event.eventPicture.url}
            alt={event.title}
            className="controler-description-image controler-description-image--right"
          />
          <p>{lang ? event.eventDescription : event.localizations.data[0].attributes.eventDescription}</p>
        </div>
        <div className="controler-info">
          <div className="controler-info--container">
            <div>
              <p>{newDate}</p>

              <p>
                {event.startHour} - {event.endHour}
              </p>
            </div>
            {event.eventAddressText && (
              <p>
                <a href={event?.eventAddressUrl} rel="noopener noreferrer" target="_blank">
                  {event.eventAddressText}
                </a>
              </p>
            )}
          </div>
        </div>
        {event.isSecondDescription && (
          <div className="controler-description">
            <img
              src={event.eventPicture.url}
              alt={event.title}
              className="controler-description-image controler-description-image--left"
            />
            <p>{lang ? event.eventSecondDescription : event.localizations.data[0].attributes.eventSecondDescription}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query EventDetails {
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
        eventSecondDescription
        eventSecondPicture {
          url
          id
        }
        isSecondDescription
        localizations {
          data {
            attributes {
              eventDescription
              eventSecondDescription
              eventSubtitle
              title
              eventButtonText
            }
          }
        }
        eventButtonText
        eventButtonUrl
        eventAddressUrl
        eventAddressText
      }
    }
  }
`

export default EventDetails
