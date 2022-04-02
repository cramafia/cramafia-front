import { getUnitAsPixels } from '@/theme/layout'
import styled from 'styled-components'
import ArrowToTop from '@/assets/icons/arrowToTop.svg'
import { ThemeType } from '@/theme/color'
import { show } from '@/theme/animation'

export const ScrollContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  left: ${getUnitAsPixels(2)};
  top: ${getUnitAsPixels(2)};
  animation: ${show} 1s ease;
  cursor: pointer;
  span {
    margin-left: ${getUnitAsPixels()};
  }
  :hover {
    opacity: 0.7;
  }
`

export const Arrow = styled(ArrowToTop)`
  width: ${getUnitAsPixels()};
  path {
    fill: ${({ theme }: { theme: ThemeType }) => theme.background.opposite};
  }
`
