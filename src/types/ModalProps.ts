import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  handleToggle?: () => void
  title: string
  isOpen: boolean
  className: string
}

export default ModalProps
