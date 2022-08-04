import React, { FC, useCallback, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { globalHistory } from '@reach/router'

import { BBDaysLogoLight } from 'components/icons'
import cx from 'classnames'
import { HeaderType } from 'types'

const DesktopHeader: FC<HeaderType> = ({ links }) => {
  const [hasNavbarBackground, setHasNavbarBackground] = useState(false)
  const path = globalHistory.location.pathname

  const isOnRulesPage = path === '/regulamin'
  const shouldHeaderBeColoured = hasNavbarBackground || isOnRulesPage

  const headerClasses = cx('header-desktop', {
    '-colored': shouldHeaderBeColoured,
  })

  const onScroll = useCallback(() => {
    if (window.scrollY > 1) {
      setHasNavbarBackground(true)
    } else {
      setHasNavbarBackground(false)
    }
  }, [])

  const getLinkComponent = useCallback((link) => {
    if (link.path.startsWith('http'))
      return (
        <a className="header-desktop__link" href={link.path} rel="noopener noreferrer" target="_blank">
          {link.name}
        </a>
      )
    return (
      <Link className="header-desktop__link" to={`/${link.path}`}>
        {link.name}
      </Link>
    )
  }, [])

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header key="desktop-header" className={headerClasses}>
      <Link to="/">
        <BBDaysLogoLight className="header-desktop__logo" />
      </Link>
      <div className="header-desktop__nav">{links.map(getLinkComponent)}</div>
    </header>
  )
}

export default DesktopHeader
