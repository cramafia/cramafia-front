import { Login } from './Login'
import { ModalSize } from '../../theme/layout'
import { Register } from './Register'
import { ModalPayloadType } from '../../types'

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
