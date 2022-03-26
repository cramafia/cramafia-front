import { ModalSize } from '../../theme/layout'

export interface ModalProps {}

export interface ModalPayloadType {
  type: ModalType
  size?: ModalSize
}

export enum ModalType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}
