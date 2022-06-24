import React, { FC, useCallback, useState } from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'

import {
  BBDaysLogoDark,
  BBDaysLogoLight,
  CloseHamburgerIcon,
  FacebookIcon,
  HamburgerIcon,
  InstagramIcon,
  TwitterIcon,
} from 'components/icons'

import { HeaderType } from 'types'

const MobileHeader: FC<HeaderType> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerMobileClasses = cx('header-mobile', { '-hamburger-open': isMenuOpen })

  const getLinkComponent = useCallback((link) => {
    if (link.path.startsWith('http'))
      return (
        <a
          className="header-mobile__link"
          href={link.path}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => {
            setIsMenuOpen(false)
          }}>
          {link.name}
        </a>
      )
    return (
      <Link
        className="header-mobile__link"
        to={link.path}
        onClick={() => {
          setIsMenuOpen(false)
        }}>
        {link.name}
      </Link>
    )
  }, [])

  return (
    <header key="mobile-header" className={headerMobileClasses}>
      <div className="header-mobile__top-bar">
        <Link
          to="/"
          onClick={() => {
            setIsMenuOpen(false)
          }}>
          <BBDaysLogoLight className="header-mobile__logo -light" />
          <BBDaysLogoDark className="header-mobile__logo -dark" />
        </Link>
        {isMenuOpen ? (
          <CloseHamburgerIcon className="header-mobile__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <HamburgerIcon className="header-mobile__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="header-mobile__menu">
        <div className="header-mobile__nav">{links.map(getLinkComponent)}</div>
        <button className="header-mobile__contact-button">Spotkaj się z nami</button>
        <div className="header-mobile__socials">
          <a href="https://twitter.com/bbdays4" rel="noopener noreferrer" target="_blank">
            <TwitterIcon className="header-mobile__social-icon" />
          </a>
          <a href="https://www.facebook.com/bbdays4.it/" rel="noopener noreferrer" target="_blank">
            <FacebookIcon className="header-mobile__social-icon" />
          </a>
          <a href="https://www.instagram.com/bbdays4.it/" rel="noopener noreferrer" target="_blank">
            <InstagramIcon className="header-mobile__social-icon" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
