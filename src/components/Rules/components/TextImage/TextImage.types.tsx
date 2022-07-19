import { ReactNode } from 'react'

import { ImageType } from '@/components/Image'
import { ImageSize } from '@/theme/layout'

export interface TextImageProps {
  children: ReactNode
  imageName: ImageType
  float: ImageFloat
  imageSize?: ImageSize
}

export enum ImageFloat {
  LEFT = 'left',
  RIGHT = 'right',
  NONE = 'none',
}
