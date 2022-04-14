import { getIcon, IconType } from '@/components/Icon'
import React, { useState } from 'react'
import { IconContainer, OptionContainer, OptionText } from './Option.styles'
import { OptionProps } from './Option.types'

export const Option: React.FC = ({ text }: { OptionProps }) => {
  const [selected, setSelected] = useState(false)
  const onSelect = () => {
    setSelected((prev) => (prev ? false : true))
  }
  return (
    <OptionContainer selected={selected} onClick={onSelect}>
      <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
      <OptionText>{text}</OptionText>
    </OptionContainer>
  )
}
