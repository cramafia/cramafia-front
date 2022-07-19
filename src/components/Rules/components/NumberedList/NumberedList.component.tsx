import React, { useMemo } from 'react'

import { List, ListItem } from './NumberedList.styles'
import { NumberedListProps } from './NumberedList.types'

export const NumberedList: React.FC<NumberedListProps> = ({ text }) => {
  const splitText = (): string[] => {
    return text
      .replace(/\n/g, '')
      .split(';')
      .map((str: string) => str.trim())
      .filter((str: string) => !!str)
  }
  const list = useMemo(splitText, [text])

  return (
    <List>
      {list.map((item, idx) => (
        <ListItem key={item}>
          {idx + 1}. {item}
        </ListItem>
      ))}
    </List>
  )
}
