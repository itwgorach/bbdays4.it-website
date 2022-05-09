import React from 'react'

import { graphql, Link } from 'gatsby'

const SpeakersPage = ({data: {allStrapiSpeaker: { edges }}}: any) => {
  return (
    <div>
      <h1>Speakerzy</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { FirstName, LastName, Photo } }: any, index: number) => {
        return (
          <div key={index}>
            <h3>{FirstName} {LastName}</h3>
            <img src={Photo.url} alt="speaker's photo" />
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  {
    allStrapiSpeaker {
      edges {
        node {
          FirstName
          LastName
          Photo {
            url
          }
        }
      }
    }
  }
`

export default SpeakersPage
