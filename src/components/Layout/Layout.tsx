import React, { FC } from 'react'

import Header from './Header'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => (
  <>
    <Header />
    <main className="layout">{React.cloneElement(children, props)}</main>
  </>
)

export default Layout
