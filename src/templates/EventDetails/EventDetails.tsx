import { useLanguageContext } from 'contexts/LanguageContext'
import { graphql } from 'gatsby'
import React, { FC, useMemo } from 'react'
import EventDetailsType from 'types/EventDetailsType'

const EventDetails: FC<EventDetailsType> = ({ data, pageContext }) => {
  const { events } = data.strapiComponentBaseSchedule
  const { slug } = pageContext
  const { language } = useLanguageContext()

  const lang = language === 'pl'
  const months = {
    pl: [
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
    ],
    en: [
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
    ],
  }

  const convertNewLinesToHTML = (text: string): string => {
    return text.replace(/\n/g, '<br>')
  }

  const event = events.find((event) => event.eventSlug === slug)

  const newDate = useMemo(() => {
    if (!event) return ''
    const [day, month] = event.date.split('.')
    const monthIndex = parseInt(month) - 1
    const nameOfMonth = lang ? months.pl[monthIndex] : months.en[monthIndex]
    return `${day} - ${nameOfMonth}`
  }, [event, lang, months])

  if (!event) {
    return <h2>Event nie znaleziony</h2>
  }

  const localizedEvent = lang ? event : event.localizations.data[0].attributes

  return (
    <div className="event-details">
      <div className="hero">
        <div className="hero-gray" />
        <img src={event.eventHero.url} alt={event.title} className="hero-image" />
        <div className="hero-content">
          <h1>{localizedEvent.title}</h1>
          <h2>{localizedEvent.eventSubtitle}</h2>
          {event.eventButtonText && event.eventButtonUrl && (
            <a className="hero-content-button" href={event.eventButtonUrl} rel="noopener noreferrer" target="_blank">
              {localizedEvent.eventButtonText}
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
          <p dangerouslySetInnerHTML={{ __html: convertNewLinesToHTML(localizedEvent.eventDescription) }}></p>
        </div>
        <div className="controler-info">
          <div className="controler-info--container">
            <div className="controler-info--date-background">
              <p>{newDate}</p>
              <p>
                {event.startHour} - {event.endHour}
              </p>
            </div>
            {event.eventAddressText && (
              <p>
                <a href={event.eventAddressUrl} rel="noopener noreferrer" target="_blank">
                  {localizedEvent.eventAddressText}
                </a>
              </p>
            )}
          </div>
        </div>
        {event.isSecondDescription && (
          <div className="controler-description">
            <img
              src={event.eventSecondPicture.url}
              alt={event.title}
              className="controler-description-image controler-description-image--left"
            />
            <p dangerouslySetInnerHTML={{ __html: convertNewLinesToHTML(localizedEvent.eventSecondDescription) }}></p>
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
              eventAddressText
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
