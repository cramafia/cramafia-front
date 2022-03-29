import React from 'react'

import { HeadingProps } from './Heading.types'
import { Container, Text, ListItem } from './Heading.styles'
import { getAnchor } from '../../helpers/anchors'

export const Heading = ({
  text,
  listNo,
  justify = 'initial',
  anchor,
}: HeadingProps) => {
  return (
    <Container>
      <Text justify={justify}>
        {listNo && <ListItem name={listNo}>{listNo}</ListItem>}
        <span>{anchor ? getAnchor(anchor).title : text}</span>
      </Text>
    </Container>
  )
}
