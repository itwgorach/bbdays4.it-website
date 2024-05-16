import React, { ReactNode } from 'react'
import ReactModal from 'react-modal'

type ModalProps = {
  children: ReactNode,
  handleToggle?: () => void,
  title: string,
  isOpen: boolean,
  className: string,
}

const Modal = ({ children, title, isOpen, className, handleToggle }: ModalProps) => {
  return (
    <>
      <ReactModal isOpen={isOpen} overlayClassName={'modal'} bodyOpenClassName={'modal__body-open'}>
        {children}
      </ReactModal>
    </>
  )
}

export default Modal
