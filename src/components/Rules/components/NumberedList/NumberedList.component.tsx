import React, { useMemo } from 'react'

import { NumberedListProps } from './NumberedList.types'
import { List, ListItem } from './NumberedList.styles'
import _ from 'lodash'

export const NumberedList = ({ text }: NumberedListProps) => {
  const splitText = (): string[] => {
    if (_.isString(text)) {
      try {
        return `${text}`
          ?.replace(/\n/g, '')
          ?.split(';')
          ?.map((str: string) => str.trim())
          ?.filter((str: string) => !!str)
      } catch (e) {
        console.log(e)
        return []
      }
    }
    return []
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
