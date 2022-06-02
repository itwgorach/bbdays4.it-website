import React, { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Header from './Header'
import Seo from './Seo'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  const isDesktop = useMediaQuery({ minWidth: 1224 })
  return (
    <>
      <Seo />
      <Header isDesktop={isDesktop} />
      <main className="layout">{React.cloneElement(children, props)}</main>
    </>
  )
}

export default Layout
