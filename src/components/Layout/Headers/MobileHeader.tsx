import React, { FC, useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

import {
  BBDaysLogoDark,
  BBDaysLogoLight,
  CloseHamburgerIcon,
  FacebookIcon,
  HamburgerIcon,
  InstagramIcon,
  TwitterIcon,
} from 'components/icons'

import { HeaderType, LinkType } from 'types'

const MobileHeader: FC<HeaderType> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header key="mobile-header" className={classnames('header-mobile', { '-hamburger-open': isMenuOpen })}>
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
        <div className="header-mobile__nav">
          {links.map((link: LinkType, index: number) => (
            <Link
              key={index}
              className="header-mobile__link"
              to={link.path}
              onClick={() => {
                setIsMenuOpen(false)
              }}>
              {link.name}
            </Link>
          ))}
        </div>
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
