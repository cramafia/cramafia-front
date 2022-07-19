import styled from 'styled-components'

import { ThemeType } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'

export const Wrapper = styled.div<{ units?: number }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background: ${({ theme }: { theme: ThemeType }) => theme.background.primary};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  & > div {
    width: ${({ units }) => `${getUnitAsPixels(units ?? 5)}`};
    height: ${({ units }) => `${getUnitAsPixels(units ?? 5)}`};
  }
`
