import { socialLinks, plFooterLinks, enFooterLinks } from 'constants/constants'
import React, { FC, useState, useCallback } from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import { LinkType } from 'types'
import { useLanguageContext } from 'contexts/LanguageContext'
import PrivacyPolicy from './PrivacyPolicy'

type FooterProps = {
  pathname: string
}

const isExternalLink = (link: LinkType) => link.path.startsWith('http') || link.path.startsWith('mailto')

const Footer: FC<FooterProps> = ({ pathname }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isOnRulesPage = pathname === '/regulamin' || pathname === '/regulamin/'

  const { language } = useLanguageContext()

  const footerClasses = cx('footer', {
    '-rules': isOnRulesPage,
  })

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
    <footer className={footerClasses} id="footer">
      <div className="footer__text">
        <span className="footer__text-copyright">
          {language === 'pl'
            ? '2019-2024 wszelkie prawa zastrzeżone © BBdays4IT '
            : '2019-2024 all rights reserved © BBdays4IT '}
        </span>
        <div className="footer__text-modal" onClick={toggleModal}>
          {language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
        </div>
        {language === 'pl' ? plFooterLinks.map(getLinkComponent) : enFooterLinks.map(getLinkComponent)}
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
        title={language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
      />
    </footer>
  )
}

export default Footer
