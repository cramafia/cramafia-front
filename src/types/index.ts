import React from 'react'

import { ModalSize } from '@/theme/layout'
import { AlertType } from '@/components/Alert/Alert.types'
export interface ModalPayloadType {
  ModalContent: React.FC
  size?: ModalSize
}

export interface AlertPayloadType {
  type: AlertType
  title: string
  text: string
}
