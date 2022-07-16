import React from 'react'

import { getImage, ImageType } from '@/components/Image'
import { ImageSize } from '@/theme/layout'

import { Icons } from './Scorring.styles'

export const Scorring = () => {
  return (
    <Icons>
      {getImage(ImageType.SCORING_1, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_2, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_3, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_4, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_5, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_6, ImageSize.XXLARGE)}
      {getImage(ImageType.SCORING_7, ImageSize.XXLARGE)}
    </Icons>
  )
}
