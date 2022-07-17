import styled from 'styled-components'
import { ThemeType } from '@/theme/color'

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }: { theme: ThemeType }) => theme.background.primary};
`
