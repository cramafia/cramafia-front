import React from 'react'

import { TextContainer } from './Text.styles'
import { TextProps } from './Text.types'

export const Text: React.FC<TextProps> = ({ children }) => {
  return <TextContainer>{children}</TextContainer>
}
