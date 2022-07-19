import React, { useMemo } from 'react'

import { IconContainer, OptionText, SubOptionContainer } from '../styles'

import { SubOptionProps } from './types'

import { getIcon, IconType } from '@/components/Icon'

export const SubOption: React.FC<SubOptionProps> = ({
  text,
  id,
  onClick,
  gameType,
  activeSubOptions,
}) => {
  const selected = useMemo(
    () => activeSubOptions.includes(id),
    [activeSubOptions, id]
  )
  const canEdit = useMemo(() => gameType.canEdit.includes(id), [gameType, id])

  const onSelect = (): void => {
    onClick(id, canEdit)
  }

  return (
    <SubOptionContainer
      selected={selected}
      onClick={onSelect}
      canEdit={canEdit}
    >
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText selected={selected}>{text}</OptionText>
    </SubOptionContainer>
  )
}
