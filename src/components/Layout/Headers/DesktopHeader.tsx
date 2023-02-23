import React, { FC, useCallback, useEffect, useState } from 'react'
import { Link } from 'gatsby'

import { BBDaysNewLogoWhite } from 'components/icons'
import cx from 'classnames'
import { HeaderType } from 'types'
import { useActiveLink } from 'contexts/ActiveLinkContext'

type DesktopHeaderProps = HeaderType & {
  pathname: string,
}

const isActive = (activeLink, path) => {
  return `#${activeLink}` === path ? { className: 'header-desktop__link -active' } : {}
}

const DesktopHeader: FC<DesktopHeaderProps> = ({ links, pathname }) => {
  const [hasNavbarBackground, setHasNavbarBackground] = useState(false)
  const { activeLink } = useActiveLink()

  const isOnRulesPage = pathname === '/regulamin' || pathname === '/regulamin/'
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

  const getLinkComponent = useCallback(
    (link) => {
      if (link.path.startsWith('http'))
        return (
          <a className="header-desktop__link" href={link.path} rel="noopener noreferrer" target="_blank">
            {link.name}
          </a>
        )
      return (
        <Link className="header-desktop__link" getProps={() => isActive(activeLink, link.path)} to={`/${link.path}`}>
          <span>{link.name}</span>
        </Link>
      )
    },
    [activeLink],
  )

  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header key="desktop-header" className={headerClasses}>
      <Link className="header-desktop__logo-wrapper" to="/">
        <BBDaysNewLogoWhite className="header-desktop__logo" />
      </Link>
      <div className="header-desktop__nav">{links.map(getLinkComponent)}</div>
    </header>
  )
}

export default DesktopHeader
