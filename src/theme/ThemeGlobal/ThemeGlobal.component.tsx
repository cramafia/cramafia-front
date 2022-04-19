import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import { ThemeGlobalProps } from './ThemeGlobal.types'
import { Wrapper } from './ThemeGlobal.styles'
import { stateType } from '../../redux/store'
import { getTheme } from '../color'

export const ThemeGlobal: React.FC<ThemeGlobalProps> = ({
  children,
}: ThemeGlobalProps) => {
  const { theme } = useSelector((state: stateType) => state.global)
  return (
    //TODO
    //@ts-ignore
    <ThemeProvider theme={getTheme(theme)}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}
