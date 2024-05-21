import Modal from 'components/Modal'
import { CloseButtonIcon } from 'components/icons'
import { useStaticQuery, graphql } from 'gatsby'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

type PrivacyPolicyType = {
  handleModalToggle: () => void,
  isOpen: boolean,
  title: string,
}

const PrivacyPolicy: FC<PrivacyPolicyType> = ({ handleModalToggle, isOpen }) => {
  const data = useStaticQuery(query)

  return (
    <Modal className="-large" handleToggle={handleModalToggle} isOpen={isOpen}>
      <div className="footer__modal">
        <h2 className="footer__modal-header">Polityka prywatności</h2>
        <button className="modal__btn" onClick={handleModalToggle}>
          <CloseButtonIcon />
        </button>
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
        }
      }
    }
  }
`

export default PrivacyPolicy
