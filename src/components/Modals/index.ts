import React, { Fragment } from 'react'
import { Login } from './Login'
import { ModalType } from '../Modal/Modal.types'

const modals: { [key in ModalType]: React.FC } = {
  [ModalType.LOGIN]: Login,
}

export const getModal = (type: ModalType): React.FC => {
  return modals[type] || Fragment
}
