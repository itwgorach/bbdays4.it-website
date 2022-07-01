import React, { ReactNode } from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode,
  handleToggle: () => void,
  title: string,
}

const Modal = ({ children, handleToggle, title }: ModalProps) => {
  return (
    <Dialog aria-label={title} isOpen={true} onDismiss={handleToggle} allowPinchZoom>
      {children}
    </Dialog>
  )
}

export default Modal
