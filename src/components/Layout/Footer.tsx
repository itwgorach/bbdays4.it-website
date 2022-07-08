import { links as socialLinks } from 'constants/constants'
import React, { FC, useState } from 'react'
import { LinkType } from 'types'
import PrivacyPolicy from './PrivacyPolicy'

const links: LinkType[] = [
  {
    name: 'Konferencyjny kodeks postępowania',
    path: 'https://confcodeofconduct.com/index-pl.html',
  },
]

const Footer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => setIsModalOpen(true)

  return (
    <footer className="footer">
      <div className="footer__text">
        <span className="footer__text-copyright">2019-2022 wszelkie prawa zastrzeżone © BBdays4IT </span>
        <div className="footer__text-modal" onClick={handleClick}>
          Polityka prywatności
        </div>
        {links.map((link) => {
          return (
            <a key={link.name} className="footer__text-link" href={link.path} rel="noopener noreferrer" target="_blank">
              {link.name}
            </a>
          )
        })}
      </div>
      <div className="footer__social">
        {socialLinks.map(({ href, Icon }) => {
          return (
            <a key={href} href={href} rel="noopener noreferrer" target="_blank">
              <Icon className="footer__social-icon" />
            </a>
          )
        })}
      </div>
      <PrivacyPolicy
        handleModalToggle={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Polityka prywatności"
      />
    </footer>
  )
}

export default Footer
