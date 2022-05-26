import React, { FC, useState } from 'react'
import { Link } from 'gatsby'

import { BBDaysLogoLight } from 'components/icons'

const Header: FC = (props) => {
  const [backgroundColor, setBackgroundColor] = useState('-transparent')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      setBackgroundColor('-colored')
    } else {
      setBackgroundColor('-transparent')
    }
  })

  return (
    <header className={`header-desktop ${backgroundColor}`}>
      <Link to='/'>
          <BBDaysLogoLight className="header-desktop__logo" />
      </Link>
      <div className="header-desktop__nav">
        {props.links.map((link, index) => (
          <Link key={index} to={link.path} className="header-desktop__link">
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
