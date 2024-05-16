import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

type ModalProps = {
  children: ReactNode,
  isOpen: boolean,
}

const Modal = ({ children, isOpen }: ModalProps) => {
  return (
    <>
      <ReactModal isOpen={isOpen} overlayClassName={'modal'} bodyOpenClassName={'modal__body-open'}>
        {children}
      </ReactModal>
    </>
  )
}

export default Modal
