import React, { FC } from 'react'

import { graphql, Link } from 'gatsby'
import { PartnerEdgeType, PartnersPageType } from 'types'

const PartnersPage: FC<PartnersPageType> = ({
  data: {
    allStrapiPartner: { edges },
  },
}) => {
  return (
    <div>
      <h1>Partners</h1>
      <Link to="/">Home</Link>
      {edges.map(({ node: { Name, WebsiteURL, Logo, id } }: PartnerEdgeType) => (
        <div key={id}>
          <a href={WebsiteURL}>{Name}</a>
          <img alt={Name} src={Logo?.url} />
        </div>
      ))}
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
