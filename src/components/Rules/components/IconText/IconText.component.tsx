import React from 'react'

import { Container, Text, Wrapper, Title } from './IconText.styles'
import { IconTextProps } from './IconText.types'
import { getIcon } from '@/components/Icon'

export const IconText = ({
  children,
  iconName,
  isBorder = false,
  title,
  borderColor = null,
}: IconTextProps) => {
  const Icon = getIcon(iconName)
  return (
    <Container>
      <Wrapper isBorder={isBorder} borderColor={borderColor}>
        <Icon />
        {title && <Title>{title}</Title>}
      </Wrapper>
      <Text>{children}</Text>
    </Container>
  )
}
