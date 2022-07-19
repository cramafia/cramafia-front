import React, { useMemo } from 'react'

import { OptionContainer, IconContainer, OptionText } from '../styles'

import { OptionProps } from './types'

import { getIcon, IconType } from '@/components/Icon'

export const Option: React.FC<OptionProps> = ({
  text,
  currentGameType,
  onClick,
  gameType,
}) => {
  const selected = useMemo(
    () => currentGameType.type === gameType,
    [currentGameType, gameType]
  )

  return (
    <OptionContainer selected={selected} onClick={onClick}>
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText selected={selected}>{text}</OptionText>
    </OptionContainer>
  )
}
