import React, { FC } from 'react'
import { ActiveLinkProvider } from 'contexts/ActiveLinkContext'
import { LanguageProvider } from 'contexts/LanguageContext'
import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'
import CookiesConsent from './CookiesConsent'
import Language from './Language'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  return (
    <>
      <LanguageProvider>
        <Language />
        <Seo />
        <ActiveLinkProvider>
          <Header pathname={props.location.pathname} />
          <main className="layout">{React.cloneElement(children, props)}</main>
        </ActiveLinkProvider>
        <Footer pathname={props.location.pathname} />
        <CookiesConsent />
      </LanguageProvider>
    </>
  )
}

export default Layout
