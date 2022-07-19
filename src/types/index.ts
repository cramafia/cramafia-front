import React from 'react'

import { AlertType } from '@/components/Alert/Alert.types'
import { ModalSize } from '@/theme/layout'

export interface ModalPayloadType {
  ModalContent: React.FC
  size?: ModalSize
}

export interface AlertPayloadType {
  type: AlertType
  title: string
  text: string
}
