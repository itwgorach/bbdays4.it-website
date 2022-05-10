import React from 'react'

import { graphql, Link } from 'gatsby'

type Query = {
  data: AllStrapiSpeaker
}

type AllStrapiSpeaker = {
  allStrapiSpeaker: Edges
}

type Edges = {
  edges: [Node]
}

type Node = {
  node: {
    FirstName: string
    LastName: string
    Photo: Photo
  }
}

type Photo = {
  url: string
}

const SpeakersPage = ({data: {allStrapiSpeaker: { edges }}}: Query) => {
  return (
    <div>
      <h1>Speakerzy</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { FirstName, LastName, Photo } }: Node, index: number) => {
        return (
          <div key={index}>
            <h3>{FirstName} {LastName}</h3>
            <img alt="speaker's photo" src={Photo.url} />
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
