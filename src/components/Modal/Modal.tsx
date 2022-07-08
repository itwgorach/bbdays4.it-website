import React, { ReactNode } from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode,
  handleToggle?: () => void,
  title: string,
  isOpen: boolean,
  withModifier: string,
}

const Modal = ({ children, handleToggle, title, isOpen, withModifier }: ModalProps) => {
  return (
    <Dialog
      allowPinchZoom
      aria-label={title}
      className={withModifier}
      isOpen={isOpen}
      onClick={handleToggle}
      onDismiss={handleToggle}>
      {children}
    </Dialog>
  )
}

export default Modal
