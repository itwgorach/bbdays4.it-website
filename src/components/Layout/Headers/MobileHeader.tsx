import { socialLinks } from 'constants/constants'
import cx from 'classnames'
import { HeaderType } from 'types'
import { Link } from 'gatsby'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { BBDaysLogoDark, BBDaysLogoLight, CloseHamburgerIcon, HamburgerIcon } from 'components/icons'

const MobileHeader: FC<HeaderType> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 1200 })

  const headerMobileClasses = cx('header-mobile', { '-hamburger-open': isMenuOpen })

  useEffect(() => {
    !isMobile && setIsMenuOpen(false)
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen, isMobile])

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
          {link.label}
        </a>
      )
    return (
      <Link
        className="header-mobile__link"
        to={link.path}
        onClick={() => {
          setIsMenuOpen(false)
        }}>
        {link.label}
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
        <a
          className="header-mobile__contact-button"
          href="https://www.facebook.com/bbdays4.it"
          rel="noopener noreferrer"
          target="_blank">
          Spotkaj się z nami
        </a>
        <div className="header-mobile__socials">
          {socialLinks.map(({ href, Icon }) => {
            return (
              <a key={href} href={href} rel="noopener noreferrer" target="_blank">
                <Icon className="header-mobile__social-icon" />
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
