import Modal from 'components/Modal'
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

  return (
    <Modal className="-large" handleToggle={handleModalToggle} isOpen={isOpen} title={title}>
      <div className="footer__modal">
        <h2 className="footer__modal-header">Polityka prywatności</h2>
        <button className="footer__modal-button" onClick={handleModalToggle} />
        <ReactMarkdown>{data.strapiPrivacypolicy.text.data.text}</ReactMarkdown>
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
