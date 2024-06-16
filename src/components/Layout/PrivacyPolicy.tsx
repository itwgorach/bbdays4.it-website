import Modal from 'components/Modal'
import { useLanguageContext } from 'contexts/LanguageContext'
import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

type PrivacyPolicyType = {
  handleModalToggle: () => void
  isOpen: boolean
  title: string
}

const PrivacyPolicy: FC<PrivacyPolicyType> = ({ handleModalToggle, isOpen, title }) => {
  const data = useStaticQuery(query)

  const { language } = useLanguageContext()
  const privacypolicy =
    language === 'pl'
      ? data.strapiPrivacypolicy.text.data.text
      : data.strapiPrivacypolicy.localizations.data[0].attributes.text

  return (
    <Modal className="-large" handleToggle={handleModalToggle} isOpen={isOpen} title={title}>
      <div className="footer__modal">
        <h2 className="footer__modal-header">{language === 'pl' ? 'Polityka prywatności' : 'Privacy policy'}</h2>
        <button className="footer__modal-button" onClick={handleModalToggle} />
        <ReactMarkdown>{privacypolicy}</ReactMarkdown>
      </div>
    </Modal>
  )
}

const query = graphql`
  {
    strapiPrivacypolicy {
      text {
        data {
          text
          id
        }
      }
      localizations {
        data {
          id
          attributes {
            locale
            text
          }
        }
      }
      locale
    }
  }
`

export default PrivacyPolicy
