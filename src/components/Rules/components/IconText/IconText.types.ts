import { ReactNode } from 'react'

import { Color } from '../../../../theme/color'
import { IconType } from '../../../Icon'

export interface IconTextProps {
  iconName: IconType
  children: ReactNode
  isBorder?: boolean
  borderColor?: Color | null
  title?: string
}
