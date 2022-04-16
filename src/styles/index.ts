import { Color, getColor } from '@/theme/color'
import { getFont, Font } from '@/theme/font'
import { getTypography, Typography } from '@/theme/typography'
import styled, { css } from 'styled-components'
import type { CenteredContainerProps } from './types'

export const CenteredContainer = styled.div`
  display: flex;
  align-items: ${({ align = 'initial' }: CenteredContainerProps) => align};
  justify-content: ${({ justify = 'initial' }: CenteredContainerProps) =>
    justify};
`

export const StyledScroll = css`
  scrollbar-color: ${getColor(Color.DARK_BLUE_500)} ${getColor(Color.BLACK)};
  scrollbar-width: thin;
  :root {
    scrollbar-color: ${getColor(Color.DARK_BLUE_500)} ${getColor(Color.BLACK)};
    scrollbar-width: thin;
  }

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

export const LogoText = styled.span`
  background: -webkit-linear-gradient(
    0deg,
    rgba(207, 8, 21, 1) 0%,
    rgba(255, 127, 2, 1) 100%
  );
  ${getTypography(Typography.BODY_SMALL)};
  font-family: ${getFont(Font.NOSIFER)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
