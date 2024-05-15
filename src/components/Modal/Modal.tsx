import React, { ReactNode } from 'react'
// import { Dialog } from '@reach/dialog'
// import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode,
  handleToggle?: () => void,
  title: string,
  isOpen: boolean,
  className: string,
}

const Modal = ({ children, handleToggle, title, isOpen, className }: ModalProps) => {
  return (
    <h1>Modal</h1>
    // <Dialog allowPinchZoom aria-label={title} className={className} isOpen={isOpen} onDismiss={handleToggle}>
    //   {children}
    // </Dialog>
  )
}

export default Modal
