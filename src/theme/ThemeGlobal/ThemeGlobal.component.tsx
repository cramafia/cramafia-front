import { ThemeProvider } from 'styled-components'
import { ThemeGlobalProps } from './ThemeGlobal.types'
import { Wrapper } from './ThemeGlobal.styles'

export const ThemeGlobal = ({ children, theme }: ThemeGlobalProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}
