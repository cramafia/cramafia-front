import { Color } from '@/theme/color'

export interface Props {
  show?: boolean
}

export interface LoaderProps {
  className?: string
  background?: string
  gradientColors?: [Color, Color]
  shadowColor?: Color
  shadowOpacity?: number
  size?: number
  duration?: number
  emptySegs?: number
}
