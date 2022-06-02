import React, { FC, useEffect, useState } from 'react'

import Header from './Header'
import Seo from './Seo'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1224px)')
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches])
  return (
    <>
      <Seo />
      <Header isDesktop={matches} />
      <main className="layout">{React.cloneElement(children, props)}</main>
    </>
  )
}

export default Layout
