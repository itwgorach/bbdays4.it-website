import { socialLinks, footerLinks } from 'constants/constants'
import React, { FC, useState, useCallback, useEffect } from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import { LinkType } from 'types'
import PrivacyPolicy from './PrivacyPolicy'

type FooterProps = {
  location: string,
}

const Footer: FC<FooterProps> = ({ location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [path, setPath] = useState('')

  const isOnRulesPage = path === '/regulamin' || path === '/regulamin/'

  const footerClasses = cx('footer', {
    '-rules': isOnRulesPage,
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

  useEffect(() => {
    setPath(location)
  }, [location])

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
