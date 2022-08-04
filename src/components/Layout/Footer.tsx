import { socialLinks, footerLinks } from 'constants/constants'
import React, { FC, useState, useCallback } from 'react'
import { globalHistory } from '@reach/router'
import cx from 'classnames'
import { Link } from 'gatsby'
import { LinkType } from 'types'
import PrivacyPolicy from './PrivacyPolicy'

const Footer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const path = globalHistory.location.pathname

  const footerClasses = cx('footer', {
    '-rules': path === '/regulamin',
  })

  const isExternalLink = (link: LinkType) => link.path.startsWith('http') || link.path.startsWith('mailto')
  const toggleModal = () => setIsModalOpen((isModalOpen) => !isModalOpen)

  const getLinkComponent = useCallback((link: LinkType) => {
    if (isExternalLink(link))
      return (
        <a className="footer__text-link" href={link.path} rel="noopener noreferrer" target="_blank">
          {link.name}
        </a>
      )
    return (
      <Link className="footer__text-link" to={`/${link.path}`}>
        {link.name}
      </Link>
    )
  }, [])

  return (
    <footer className={footerClasses}>
      <div className="footer__text">
        <span className="footer__text-copyright">2019-2022 wszelkie prawa zastrzeżone © BBdays4IT </span>
        <div className="footer__text-modal" onClick={toggleModal}>
          Polityka prywatności
        </div>
        {footerLinks.map(getLinkComponent)}
      </div>
      <div className="footer__social">
        {socialLinks.map(({ href, Icon, name }) => (
          <a key={href} href={href} rel="noopener noreferrer" target="_blank">
            <Icon className={`footer__social-icon -${name}`} />
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
