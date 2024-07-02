import React from 'react'
import ModalProps from 'types/ModalProps'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const Modal = ({ children, handleToggle, title, isOpen, className }: ModalProps) => {
  return (
    <Dialog allowPinchZoom aria-label={title} className={className} isOpen={isOpen} onDismiss={handleToggle}>
      {children}
    </Dialog>
  )
}

export default Modal
