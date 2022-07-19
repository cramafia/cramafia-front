import { ModalPayloadType } from '../../types'

import { Login } from './Login'
import { Register } from './Register'

import { ModalSize } from '@/theme/layout'

export enum ModalType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export const getModal = (type: ModalType): ModalPayloadType => {
  return modals[type]
}

const modals: { [key in ModalType]: ModalPayloadType } = {
  [ModalType.LOGIN]: {
    ModalContent: Login,
    size: ModalSize.SMALL,
  },
  [ModalType.REGISTER]: {
    ModalContent: Register,
    size: ModalSize.MEDIUM,
  },
}
