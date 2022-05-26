import React, { FC, useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

import {
  BBDaysLogoDark,
  BBDaysLogoLight,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  HamburgerIcon,
  CloseHamburgerIcon,
} from 'components/icons'

const Header: FC = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={classnames('header-mobile', { '-hamburger-open': isMenuOpen })}>
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
          {props.links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="header-mobile__link"
              onClick={() => {
                setIsMenuOpen(false)
              }}>
              {link.name}
            </Link>
          ))}
        </div>
        <button className="header-mobile__contact-button">Skontaktuj się z nami</button>
        <div className="header-mobile__socials">
          <TwitterIcon className='header-mobile__social-icon' />
          <FacebookIcon className='header-mobile__social-icon' />
          <InstagramIcon className='header-mobile__social-icon' />
        </div>
      </div>
    </header>
  )
}

export default Header
