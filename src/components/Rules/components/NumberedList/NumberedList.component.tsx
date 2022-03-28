import React, { useMemo } from 'react'

import { NumberedListProps } from './NumberedList.types'
import { List, ListItem } from './NumberedList.styles'
import _ from 'lodash'

export const NumberedList = ({ text }: NumberedListProps) => {
  const splitText = (): string[] => {
    return _.isString(String(text))
      ? String(text)
          ?.replaceAll('\n', '')
          ?.split(';')
          ?.map((str) => str.trim())
          ?.filter((str) => !!str)
      : []
  }
  const list = useMemo(splitText, [text])
  return (
    <List>
      {list?.map((item, idx) => (
        <ListItem key={idx}>
          {idx + 1}. {item}
        </ListItem>
      ))}
    </List>
  )
}
