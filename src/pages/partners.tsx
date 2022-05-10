import React from 'react'

import { graphql, Link } from 'gatsby'
import { type } from 'os'

type Query = {
  data: AllStrapiPartner
}

type AllStrapiPartner = {
  allStrapiPartner: Edges
}

type Edges = {
  edges: [Node]
}

type Node = {
  node: {
    Name: string
    WebsiteURL: string
    Logo: Logo
  }
}

type Logo = {
  url: string
}

const PartnersPage = ({data: {allStrapiPartner: { edges }}}: Query) => {
  return (
    <div>
      <h1>Partners</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { Name, WebsiteURL, Logo } }: Node, index: number) => {
        return (
          <div key={index}>
            <a href={WebsiteURL}>{Name}</a>
            <img src={Logo.url} alt={Name} />
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  {
    allStrapiPartner {
      edges {
        node {
          Name
          WebsiteURL
          Logo {
            url
          }
        }
      }
    }
  }
`

export default PartnersPage
