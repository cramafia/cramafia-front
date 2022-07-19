import { ReactNode } from 'react'

import { IconType } from '@/components/Icon'
import { Color } from '@/theme/color'

export interface IconTextProps {
  iconName: IconType
  children: ReactNode
  isBorder?: boolean
  borderColor?: Color | null
  title?: string
}
