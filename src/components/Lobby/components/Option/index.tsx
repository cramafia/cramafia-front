import React, { useState, useEffect, MouseEvent } from 'react'

import { getIcon, IconType } from '../../../Icon'
import { OptionContainer, IconContainer, OptionText } from '../styles'
import { OptionProps } from './types'

export const Option = ({
  text,
  currentGameType,
  setCurrentGame,
  gameType,
}: OptionProps) => {
  const [selected, setSelected] = useState(false)
  useEffect(() => {
    setSelected(currentGameType.type === gameType)
  }, [currentGameType, gameType])

  const onClick = (e: MouseEvent) => {
    if (setCurrentGame) {
      setCurrentGame(gameType)
    }
  }

  return (
    <OptionContainer selected={selected} onClick={onClick}>
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText selected={selected}>{text}</OptionText>
    </OptionContainer>
  )
}
