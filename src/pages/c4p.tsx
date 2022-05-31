import React, { useEffect } from 'react'
import Seo from 'components/Layout/Seo'

const CallForPapersPage = () => {
  useEffect(() => {
    const windowGlobal = typeof window !== 'undefined' && window

    if (windowGlobal) {
      windowGlobal.location.href = 'https://selleo.typeform.com/to/WaeHjCDv'
    }
  }, [])
  return <Seo title="Call for papers" />
}

export default CallForPapersPage
