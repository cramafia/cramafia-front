import React from 'react'

import { Text } from '../Text'

import { Container, ImageContainer } from './TextImage.styles'
import type { TextImageProps } from './TextImage.types'

import { getImage } from '@/components/Image'
import { ImageSize } from '@/theme/layout'

export const TextImage: React.FC<TextImageProps> = ({
  children,
  imageName,
  float,
  imageSize = ImageSize.MEDIUM,
}) => {
  return (
    <Container float={float}>
      <ImageContainer float={float}>
        {getImage(imageName, imageSize)}
      </ImageContainer>
      <Text>{children}</Text>
    </Container>
  )
}
