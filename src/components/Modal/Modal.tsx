import React, { ReactNode } from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

type ModalProps = {
  children: ReactNode,
  handleToggle?: () => void,
  title: string,
  isOpen: boolean,
  className: string,
}

const Modal = ({ children, handleToggle, title, isOpen, className }: ModalProps) => {
  return (
    <>
      <dialog className="modal__dialog" open={!isOpen}>
        {children}
      </dialog>
    </>
    // <Dialog allowPinchZoom aria-label={title} className={className} isOpen={!isOpen} onDismiss={handleToggle}>
    //   {children}
    // </Dialog>
  )
}

export default Modal
