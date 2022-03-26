import React, { Fragment } from 'react'
import { Login } from './Login'
import { ModalType } from '../Modal/Modal.types'
import { Register } from './Register'

const modals: { [key in ModalType]: React.FC } = {
  [ModalType.LOGIN]: Login,
  [ModalType.REGISTER]: Register,
}

export const getModal = (type: ModalType): React.FC => {
  return modals[type] || Fragment
}
