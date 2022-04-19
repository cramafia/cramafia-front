import React from 'react'

import { TextProps } from './Text.types'
import { TextContainer } from './Text.styles'

export const Text = ({ children }: TextProps) => {
  return <TextContainer>{children}</TextContainer>
}
