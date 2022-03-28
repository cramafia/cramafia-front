import React from 'react'

import type { TextImageProps } from './TextImage.types'
import { ImageSize } from '@/theme/layout'
import { getImage } from '@/components/Image'
import { Container, ImageContainer } from './TextImage.styles'
import { Text } from '../Text'

export const TextImage = ({
  children,
  imageName,
  float,
  imageSize = ImageSize.MEDIUM,
}: TextImageProps) => {
  return (
    <Container float={float}>
      <ImageContainer float={float} imageSize={imageSize}>
        {getImage(imageName)}
      </ImageContainer>
      <Text>{children}</Text>
    </Container>
  )
}
