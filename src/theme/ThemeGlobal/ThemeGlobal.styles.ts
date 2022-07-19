import styled from 'styled-components'

import { ThemeType } from '../color'

export const Wrapper = styled.div`
  background: ${({ theme }: { theme: ThemeType }) => theme.background.primary};
  * {
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  }
`
