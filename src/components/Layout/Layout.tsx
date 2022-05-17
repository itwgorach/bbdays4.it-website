import React, { FC } from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => (
  <>
    <Header />
    <main className="layout">{React.cloneElement(children, props)}</main>
    <Footer />
  </>
)

export default Layout
