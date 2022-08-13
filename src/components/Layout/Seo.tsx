import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import SeoType from 'types/SeoType'

const defaultDescription =
  'Przyjedź do Bielska-Białej i zdecyduj czy spędzisz z nami tydzień, weekend a może najbliższe kilka lat. Zobacz w jakich warunkach pracują osoby z branży IT, nawiąż ciekawe kontakty, porozmawiaj o technologii, weź udział w prelekcjach i warsztatach.'
const defaultTitle = 'BB Days 4 IT :: 9 - 18 września 2022'

const Seo: FC<SeoType> = ({ keywords, meta, title, currentPath }) => {
  const expectedTitle = title || defaultTitle
  return (
    <Helmet
      htmlAttributes={{
        lang: 'pl',
      }}
      meta={[
        {
          content: defaultDescription,
          name: `description`,
        },
        {
          content: `https://deploy-preview-72--bbdays4it.netlify.app/images/facebook_cover.png?fbrefresh=true`,
          property: `og:image`,
        },
        {
          content: expectedTitle,
          property: `og:title`,
        },
        {
          content: defaultDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: '@bbdays4it',
          name: `twitter:creator`,
        },
        {
          content: expectedTitle,
          name: `twitter:title`,
        },
        {
          content: defaultDescription,
          name: `twitter:description`,
        },
      ]
        .concat(
          keywords !== undefined && keywords.length > 0
            ? {
                content: keywords?.join(`, `),
                name: `keywords`,
              }
            : [],
        )
        .concat(meta || [])}
      title={expectedTitle}
      titleTemplate={`%s | ${expectedTitle}`}
    />
  )
}
export default Seo
