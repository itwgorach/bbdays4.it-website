import React, { FC, useState, useEffect } from 'react'
import { Link } from 'gatsby'

import classnames from 'classnames'

import BBDaysLogoDark from 'components/icons/bbdays-logo-dark.svg'
import BBDaysLogoLight from 'components/icons/bbdays-logo-light.svg'

import HamburgerIcon from 'components/icons/hamburger-icon.svg'
import CloseHamburgerIcon from 'components/icons/hamburger-close-icon.svg'

import TwitterIcon from 'components/icons/twitter-icon.svg'
import FacebookIcon from 'components/icons/facebook-icon.svg'
import InstagramIcon from 'components/icons/instagram-icon.svg'

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {    
    window.addEventListener('resize', () => {
      window.outerWidth > 992 && isMenuOpen ? setIsMenuOpen(false) : window.removeEventListener
    });
  })

  return (
    <header className={classnames('header', { 'header__hamburger-open': isMenuOpen })}>
      <div className="header__inner">
        <div className="header__inner-element">
          <div>
            <BBDaysLogoLight className={classnames('header__logo-desktop', {'-hamburger': isMenuOpen})} />
            <BBDaysLogoDark className={classnames('header__logo-mobile', {'-disabled': isMenuOpen})} />
          </div>
        </div>
        <div className="header__inner-element">
          <div className="header__hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseHamburgerIcon className="header__hamburger-icon header__hamburger-icon-s" />
            ) : (
              <HamburgerIcon className="header__hamburger-icon" />
            )}
          </div>
          <div className="header__nav header__nav-desktop">
            <Link to="/">Prelegenci</Link>
            <Link to="/">Organizatorzy</Link>
            <Link to="/">Poprzednie edycje</Link>
          </div>
        </div>
      </div>
      <ul className={classnames('header__nav header__nav-mobile', { 'header__nav-mobile-shown': isMenuOpen })}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Organizatorzy</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Galeria</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Edycja 2021</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Edycja 2020</Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Edycja 2019</Link>
        </li>
      </ul>
      <div className={classnames('header__button-wrapper', { 'header__button-wrapper-show': isMenuOpen })}>
        <button className={classnames('header__button-mobile', { 'header__button-show': isMenuOpen })}>
          Spotkaj się z nami
        </button>
      </div>
      <div className={classnames("header__socials", {'header__socials-show': isMenuOpen })}>
        <TwitterIcon className="header__icon" />
        <FacebookIcon className="header__icon" />
        <InstagramIcon className="header__icon" />
      </div>
    </header>
  )
}

export default Header
