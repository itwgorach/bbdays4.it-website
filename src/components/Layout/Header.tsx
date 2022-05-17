import React, { FC } from 'react'
import { Link } from 'gatsby'

const Header: FC = () => (
  <header className="header">
    Logo
    <nav>
      <Link to="/partners">Partnerzy</Link>
      <br />
      <Link to="/posts">Posty</Link>
      <br />
      <Link to="/speakers">Speakerzy</Link>
    </nav>
  </header>
)

export default Header
