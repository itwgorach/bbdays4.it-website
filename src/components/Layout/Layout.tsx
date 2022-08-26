import React, { createContext, FC, useContext, useState } from 'react'

import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'
import CookiesConsent from './CookiesConsent'

type ActiveLinkContextType = {
  activeLink: string,
  setActiveLink: (link: string) => void,
}

export const ActiveLinkContext = createContext<ActiveLinkContextType>({} as ActiveLinkContextType)

const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('')

  return <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>{children}</ActiveLinkContext.Provider>
}

export const useActiveLink = () => useContext(ActiveLinkContext)

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  return (
    <>
      <Seo />
      <ActiveLinkProvider>
        <Header pathname={props.location.pathname} />
        <main className="layout">{React.cloneElement(children, props)}</main>
      </ActiveLinkProvider>
      <Footer pathname={props.location.pathname} />
      <CookiesConsent />
    </>
  )
}

export default Layout
