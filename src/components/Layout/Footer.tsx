import React, { FC } from 'react'

import { FacebookIcon, InstagramIcon, TwitterIcon } from 'components/icons'

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a href="https://twitter.com/bbdays4" rel="noopener noreferrer" target="_blank">
        <TwitterIcon className="footer__social-icon" />
      </a>
      <a href="https://www.facebook.com/bbdays4.it/" rel="noopener noreferrer" target="_blank">
        <FacebookIcon className="footer__social-icon" />
      </a>
      <a href="https://www.instagram.com/bbdays4.it/" rel="noopener noreferrer" target="_blank">
        <InstagramIcon className="footer__social-icon" />
      </a>
    </footer>
  )
}

export default Footer
