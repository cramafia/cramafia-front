import styled from 'styled-components'

import { getMediaQuery, getUnitAsPixels, ScreenSize } from '@/theme/layout'
import ArrowToTop from '@/assets/icons/arrowToTop.svg'
import { ThemeType } from '@/theme/color'
import { show } from '@/theme/animation'

export const ScrollContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  left: ${getUnitAsPixels(2)};
  top: ${getUnitAsPixels(13)};
  animation: ${show} 1s ease;
  cursor: pointer;
  span {
    margin-left: ${getUnitAsPixels()};
    ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
      display: none;
    }
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
