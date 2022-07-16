import React, { useState, useEffect, useMemo } from 'react'

import { getIcon, IconType } from '@/components/Icon'
import { IconContainer, OptionText, SubOptionContainer } from '../styles'
import { SubOptionProps } from './types'

export const SubOption = ({
  text,
  id,
  onClick,
  gameType,
  activeSubOptions,
}: SubOptionProps) => {
  const selected = useMemo(
    () => activeSubOptions.includes(id),
    [activeSubOptions, id]
  )
  const canEdit = useMemo(() => gameType.canEdit.includes(id), [gameType, id])

  return (
    <SubOptionContainer
      selected={selected}
      onClick={onClick.bind(this, id, canEdit)}
      canEdit={canEdit}
    >
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText selected={selected}>{text}</OptionText>
    </SubOptionContainer>
  )
}
