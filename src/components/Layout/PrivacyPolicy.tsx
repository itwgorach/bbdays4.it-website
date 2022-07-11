import Modal from 'components/Modal'
import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

type PrivacyPolicyType = {
  handleModalToggle: () => void,
  isOpen: boolean,
  title: string,
}

const PrivacyPolicy: FC<PrivacyPolicyType> = ({ handleModalToggle, isOpen, title }) => {
  const data = useStaticQuery(graphql`
    {
      strapiPrivacypolicy {
        text {
          data {
            text
          }
        }
      }
    }
  `)

  return (
    <Modal handleToggle={handleModalToggle} isOpen={isOpen} className="-large" title={title}>
      <div className="footer__modal">
        <h2 className="footer__modal-header">Polityka prywatności</h2>
        <ReactMarkdown>{data.strapiPrivacypolicy.text.data.text}</ReactMarkdown>
      </div>
    </Modal>
  )
}

export default PrivacyPolicy
