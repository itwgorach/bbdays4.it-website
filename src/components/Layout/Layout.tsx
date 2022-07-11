import React, { FC, useState } from 'react'
import CookieConsent from 'react-cookie-consent'

import Header from './Header'
import Seo from './Seo'
import Footer from './Footer'
import PrivacyPolicy from './PrivacyPolicy'

const Layout: FC<JSX.IntrinsicAttributes> = ({ children, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => setIsModalOpen(true)

  return (
    <>
      <Seo />
      <Header />
      <main className="layout">{React.cloneElement(children, props)}</main>
      <Footer />
      <CookieConsent
        buttonClasses="cookies__button"
        buttonText="Akceptuję"
        location="bottom"
        style={{ alignItems: 'center', opacity: 0.9 }}>
        <span className="cookies__text">
          Strona{' '}
          <a className="cookies__text-link" href="/">
            BBdays4.it
          </a>{' '}
          zapisuje informacje w postaci ciasteczek (ang. cookies). Ciasteczka używane są do zapisywania informacji
          dotyczących anonimowch odwiedzin naszego serwisu oraz umożliwiają prawidłowe funcjonowanie strony
        </span>
        <div className="cookies__text-modal" onClick={handleClick}>
          Polityka prywatności
        </div>
      </CookieConsent>
      <PrivacyPolicy
        handleModalToggle={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Polityka prywatności"
      />
    </>
  )
}

export default Layout
