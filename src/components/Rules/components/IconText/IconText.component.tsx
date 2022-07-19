import React from 'react'

import { Container, Text, Wrapper, Title } from './IconText.styles'
import { IconTextProps } from './IconText.types'

import { getIcon } from '@/components/Icon'

export const IconText: React.FC<IconTextProps> = ({
  children,
  iconName,
  isBorder = false,
  title,
  borderColor = null,
}) => {
  return (
    <Container>
      <Wrapper isBorder={isBorder} borderColor={borderColor}>
        {getIcon(iconName)()}
        {title && <Title>{title}</Title>}
      </Wrapper>
      <Text>{children}</Text>
    </Container>
  )
}
