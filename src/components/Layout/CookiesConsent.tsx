import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import PrivacyPolicy from './PrivacyPolicy'

const CookiesConsent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => setIsModalOpen((isModalOpen) => !isModalOpen)

  return (
    <>
      <CookieConsent
        buttonClasses="cookies__button"
        buttonText="Akceptuję"
        containerClasses="cookies"
        location="bottom">
        <span className="cookies__text">
          Strona{' '}
          <Link className="cookies__text-link" to="/">
            BBdays4.it
          </Link>{' '}
          zapisuje informacje w postaci ciasteczek (ang. cookies). Ciasteczka używane są do zapisywania informacji
          dotyczących anonimowch odwiedzin naszego serwisu oraz umożliwiają prawidłowe funcjonowanie strony
        </span>
        <div className="cookies__text-modal" onClick={handleClick}>
          Polityka prywatności
        </div>
      </CookieConsent>
      <PrivacyPolicy handleModalToggle={() => setIsModalOpen((isModalOpen) => !isModalOpen)} isOpen={isModalOpen} />
    </>
  )
}

export default CookiesConsent
