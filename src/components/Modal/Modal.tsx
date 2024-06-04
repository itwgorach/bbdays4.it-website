import React, { ReactNode } from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode
  handleToggle?: () => void
  title: GatsbyTypes.Maybe<string>
  isOpen: boolean
  className?: string
}

const Modal = ({ children, handleToggle, title, isOpen, className }: ModalProps) => {
  return (
    <Dialog allowPinchZoom aria-label={title} className={className} isOpen={isOpen} onDismiss={handleToggle}>
      {children}
    </Dialog>
  )
}

export default Modal
