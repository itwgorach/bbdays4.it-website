import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { c4pUrl } from 'constants/constants'

const C4pPage = () => {
  useEffect(() => {
    window.location.replace(c4pUrl)
  }, [])

  return (
    <>
      <Helmet>
        <meta content={`0; url=${c4pUrl}`} httpEquiv="refresh" />
        <link href={c4pUrl} rel="canonical" />
      </Helmet>
      <main>
        <a href={c4pUrl} rel="noopener noreferrer">
          C4P
        </a>
      </main>
    </>
  )
}

export default C4pPage
