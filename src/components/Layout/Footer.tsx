import { links as socialLinks } from 'constants/constants'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">2019-2022 wszelkie prawa zastrzeżone © BBdays4IT</div>
      <div className="footer__social">
        {socialLinks.map(({ href, Icon }) => {
          return (
            <a key={href} href={href} rel="noopener noreferrer" target="_blank">
              <Icon className="footer__social-icon" />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
