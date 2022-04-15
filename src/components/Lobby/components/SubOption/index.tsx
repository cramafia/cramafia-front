import React, { useState, useEffect, MouseEvent } from 'react'

import { getIcon, IconType } from '../../../Icon'
import { IconContainer, OptionText, SubOptionContainer } from '../styles'
import { SubOptionProps } from './types'

export const SubOption = ({ text, id, currentGameType }: SubOptionProps) => {
  const [selected, setSelected] = useState(false)
  const [canEdit, setCanEdit] = useState(false)

  useEffect(() => {
    setCanEdit(currentGameType.canEdit.includes(id))
    setSelected(false)
  }, [currentGameType])

  const onClick = () => {
    if (canEdit) setSelected(!selected)
  }

  return (
    <SubOptionContainer selected={selected} onClick={onClick} canEdit={canEdit}>
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText selected={selected}>{text}</OptionText>
    </SubOptionContainer>
  )
}
