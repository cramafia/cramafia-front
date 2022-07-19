import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { StateType } from '../../redux/store'
import { getTheme } from '../color'

import { Wrapper } from './ThemeGlobal.styles'
import { ThemeGlobalProps } from './ThemeGlobal.types'

export const ThemeGlobal: React.FC<ThemeGlobalProps> = ({
  children,
}: ThemeGlobalProps) => {
  const { theme } = useSelector((state: StateType) => state.global)

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}
