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

  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen)

  return (
    <footer className="footer">
      <div className="footer__text">
        <span className="footer__text-copyright">2019-2022 wszelkie prawa zastrzeżone © BBdays4IT </span>
        <div className="footer__text-modal" onClick={toggleModal}>
          Polityka prywatności
        </div>
        {links.map(({ name, path }) => {
          return (
            <a key={name} className="footer__text-link" href={path} rel="noopener noreferrer" target="_blank">
              {name}
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
        handleModalToggle={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
        isOpen={isModalOpen}
        title="Polityka prywatności"
      />
    </footer>
  )
}

export default Footer
