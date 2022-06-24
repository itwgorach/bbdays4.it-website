import { links as socialLinks } from 'constants/constants'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="footer">
      {socialLinks.map(({ href, Icon }) => {
        return (
          <a key={href} href={href} rel="noopener noreferrer" target="_blank">
            <Icon className="footer__social-icon" />
          </a>
        )
      })}
    </footer>
  )
}

export default Footer
