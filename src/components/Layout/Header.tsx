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
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setBackgroundColor('color-primary')
    } else {
      setBackgroundColor('transparent')
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      setIsMenuOpen(false)
    }
  })

  return (
    <header className={classnames('header', { '-hamburger-open': isMenuOpen }, {'-background-colored': backgroundColor == 'color-primary'})}>
      <div className="header__inner">
        <div className="header__menu -mobile">
          <BBDaysLogoDark className="header__logo -mobile" />
          <BBDaysLogoLight className="header__logo -desktop" />
          <div className="header__hamburger-menu">
            {isMenuOpen ? (
              <CloseHamburgerIcon className="header__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            ) : (
              <HamburgerIcon className="header__hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            )}
          </div>
        </div>
        <div className="header__menu -desktop">
          <ul className="header__nav">
            {linksData.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="header__nav-link" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="header__contact-button">Skontaktuj się z nami</button>
          <div className="header__socials">
            <TwitterIcon className="header__social-icon" />
            <FacebookIcon className="header__social-icon" />
            <InstagramIcon className="header__social-icon" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
