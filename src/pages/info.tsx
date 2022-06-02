import React, { useEffect } from 'react'
import Seo from 'components/Layout/Seo'

const InfoPage = () => {
  useEffect(() => {
    const windowGlobal = typeof window !== 'undefined' && window

    if (windowGlobal) {
      windowGlobal.location.href =
        'https://docs.google.com/presentation/d/1dEAPPspfpNUprHcMLlPag_95jo-b7RbOdZLXopmwikw/present?slide=id.p1'
    }
  }, [])
  return <Seo title="O festiwalu" />
}

export default InfoPage
