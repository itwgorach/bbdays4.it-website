import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import { useLanguageContext } from 'contexts/LanguageContext'
import PrivacyPolicy from './PrivacyPolicy'

const CookiesConsent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => setIsModalOpen((isModalOpen) => !isModalOpen)

  const { language } = useLanguageContext()

  return (
    <>
      <CookieConsent
        buttonClasses="cookies__button"
        buttonText="Akceptuję"
        containerClasses="cookies"
        location="bottom">
        <span className="cookies__text">
          {language === 'pl' ? 'Strona  ' : 'Website  '}
          <Link className="cookies__text-link" to="/">
            BBdays4.it
          </Link>{' '}
          {language === 'pl'
            ? 'zapisuje informacje w postaci ciasteczek (ang. cookies). Ciasteczka używane są do zapisywania informacji dotyczących anonimowch odwiedzin naszego serwisu oraz umożliwiają prawidłowe funcjonowanie strony'
            : 'saves information in the form of cookies. Cookies are used to save information regarding anonymous visits to our website and enable the proper functioning of the website'}
        </span>
        <div className="cookies__text-modal" onClick={handleClick}>
          {language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
        </div>
      </CookieConsent>
      <PrivacyPolicy
        handleModalToggle={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
        isOpen={isModalOpen}
        title={language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}
      />
    </>
  )
}

export default CookiesConsent
