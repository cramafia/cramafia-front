import React from 'react'
import { ModalSize } from '../theme/layout'

export interface ModalPayloadType {
  ModalContent: React.FC
  size?: ModalSize
}

export interface AlertPayloadType {
  type: string
  title: string
  text: string
}
