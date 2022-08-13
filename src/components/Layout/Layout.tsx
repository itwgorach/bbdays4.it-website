import React, { FC } from 'react'

import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'
import CookiesConsent from './CookiesConsent'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  return (
    <>
      <Seo currentPath={props.location.href} />
      <Header pathname={props.location.pathname} />
      <main className="layout">{React.cloneElement(children, props)}</main>
      <Footer pathname={props.location.pathname} />
      <CookiesConsent />
    </>
  )
}

export default Layout
