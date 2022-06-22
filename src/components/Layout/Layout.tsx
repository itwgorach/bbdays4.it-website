import React, { FC } from 'react'

import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  return (
    <>
      <Seo />
      <Header />
      <main className="layout">{React.cloneElement(children, props)}</main>
      <Footer />
    </>
  )
}

export default Layout
