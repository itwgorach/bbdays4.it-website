import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import SeoType from 'types/SeoType'

const defaultDescription =
  'Przyjedź do Bielska-Białej i zdecyduj czy spędzisz z nami tydzień, weekend a może najbliższe kilka lat. Zobacz w jakich warunkach pracują osoby z branży IT, nawiąż ciekawe kontakty, porozmawiaj o technologii, weź udział w prelekcjach i warsztatach.'
const defaultTitle = 'BB Days 4 IT : 6-15 września 2024'

const Seo: FC<SeoType> = ({ keywords, meta, title }) => {
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
          content: 'https://www.bbdays4.it/images/BBdays4.it_facebook.png?fbrefresh=true',
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
