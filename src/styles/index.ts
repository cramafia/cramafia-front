import { Color, getColor } from '@/theme/color'
import styled, { css } from 'styled-components'
import type { CenteredContainerProps } from './types'

export const CenteredContainer = styled.div`
  display: flex;
  align-items: ${({ align = 'initial' }: CenteredContainerProps) => align};
  justify-content: ${({ justify = 'initial' }: CenteredContainerProps) =>
    justify};
`

export const StyledScroll = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: ${getColor(Color.BLACK)};
  }

  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px ${getColor(Color.DARK_BLUE_500)};
    background: ${getColor(Color.DARK_BLUE_500)};
  }
`
