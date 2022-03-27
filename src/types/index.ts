import React from 'react'
import { ModalSize } from '../theme/layout'

export interface ModalPayloadType {
  ModalContent: React.FC
  size?: ModalSize
}
