import { socialLinks, footerLinks } from 'constants/constants'
import React, { FC, useState } from 'react'
import PrivacyPolicy from './PrivacyPolicy'

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
        {footerLinks.map(({ name, path }) => (
          <a key={name} className="footer__text-link" href={path} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        ))}
      </div>
      <div className="footer__social">
        {socialLinks.map(({ href, Icon }) => (
          <a key={href} href={href} rel="noopener noreferrer" target="_blank">
            <Icon className="footer__social-icon" />
          </a>
        ))}
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
