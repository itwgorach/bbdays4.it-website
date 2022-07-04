import React, { ReactNode } from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode,
  handleToggle?: () => void,
  title: string,
  isOpen: boolean,
}

const Modal = ({ children, handleToggle, title, isOpen }: ModalProps) => {
  return (
    <Dialog allowPinchZoom aria-label={title} isOpen={isOpen} onClick={handleToggle} onDismiss={handleToggle}>
      {children}
    </Dialog>
  )
}

export default Modal
