import React from 'react'

import { getAnchor } from '../../helpers/anchors'

import { Container, Text, ListItem } from './Heading.styles'
import { HeadingProps } from './Heading.types'

export const Heading: React.FC<HeadingProps> = ({
  text,
  listNo,
  justify = 'initial',
  anchor,
}) => {
  return (
    <Container>
      <Text justify={justify}>
        {listNo && <ListItem>{listNo}</ListItem>}
        <span>{anchor ? getAnchor(anchor).title : text}</span>
      </Text>
    </Container>
  )
}
