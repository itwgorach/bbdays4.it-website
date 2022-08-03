import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { LinkType } from 'types'
import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

const Header = () => {
  const {
    strapiHeader: { header: links }
  } = useStaticQuery(query)
  const linksData: LinkType[] = links[0].links

  return (
    <>
      <DesktopHeader links={linksData} />
      <MobileHeader links={linksData} />
    </>
  )
}

const query = graphql`
  {
      strapiHeader {
          header {
              ... on STRAPI__COMPONENT_BASE_HEADER_LINKS {
                links {
                  id
                  label
                  path
                }
             }
          }
      } 
    }
`

export default Header
