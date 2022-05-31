import React, { FC } from 'react'

import Header from './Header'
import Footer from './Footer'
import Partners from 'components/Partners'
import Gallery from 'components/Gallery'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => (
  <>
    <Header />
    <main className="layout">{React.cloneElement(children, props)}</main>
    <Gallery />
    <Partners />
    <Footer />
  </>
)

export default Layout
