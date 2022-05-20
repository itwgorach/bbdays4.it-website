import React, { FC, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import MobileHeader from './Headers/MobileHeader'
import DesktopHeader from './Headers/DesktopHeader'

<<<<<<< HEAD
import { LinkType } from 'types'

const linksData: LinkType[] = [
=======
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
>>>>>>> e31ef7e (rebuild header component)
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
  const isMobile = useMediaQuery({ maxWidth: 992 })

<<<<<<< HEAD
  if(isMobile) {
    return <MobileHeader links={linksData} />
  }
  
  return <DesktopHeader links={linksData} />
=======
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
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
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
>>>>>>> 5d9fb3d (update styles and markup)
}

export default Header
