import { ReactNode } from 'react'
import { Login } from './Login'
import { ModalType } from '../Modal/Modal.types'

const modals: { [key in ModalType]: ReactNode } = {
  [ModalType.LOGIN]: Login,
}

export const getModal = (type: ModalType): ReactNode => {
  return modals[type]
}
