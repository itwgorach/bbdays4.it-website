import React, { FC, useState, useEffect } from 'react'
import { Link } from 'gatsby'

import classnames from 'classnames'

import {
  BBDaysLogoLight,
  BBDaysLogoDark,
  CloseHamburgerIcon,
  HamburgerIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from 'components/icons/'

const linksData = [
  {
    name: 'Organizatorzy',
    path: '/',
  },
  {
    name: 'Galeria',
    path: '/',
  },
  {
    name: 'Edycja 2021',
    path: '/',
  },
  {
    name: 'Edycja 2020',
    path: '/',
  },
  {
    name: 'Edycja 2019',
    path: '/',
  },
]

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={classnames('header', { '-hamburger-open': isMenuOpen })}>
      <div className="header__inner">
        <BBDaysLogoDark className="header__logo -mobile" />
        <BBDaysLogoLight className="header__logo -desktop" />
        <div className="header__menu">
          <ul className="header__nav">
            {linksData.map((link) =>  (
                <li key={link.name}>
                  <Link to={link.path} className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>
          <button className="header__contact-button">Skontaktuj się z nami</button>
          <div className="header__socials">
            <TwitterIcon className="header__social-icon" />
            <FacebookIcon className="header__social-icon" />
            <InstagramIcon className="header__social-icon"/>
          </div>
        </div>
        <div className="header__hamburger-menu">
          {isMenuOpen ? (
            <CloseHamburgerIcon className="header__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <HamburgerIcon className="header__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
