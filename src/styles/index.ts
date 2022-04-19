import styled, { css } from 'styled-components'

import { Color, getColor, ThemeType } from '@/theme/color'
import { getFont, Font } from '@/theme/font'
import { getTypography, Typography } from '@/theme/typography'

import type { CenteredContainerProps } from './types'

export const CenteredContainer = styled.div`
  display: flex;
  align-items: ${({ align = 'initial' }: CenteredContainerProps) => align};
  justify-content: ${({ justify = 'initial' }: CenteredContainerProps) =>
    justify};
`

export const StyledScroll = css`
  scrollbar-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary === getColor(Color.BLACK)
      ? `${getColor(Color.DARK_LIGHT_500)} ${theme.background.primary}`
      : `${getColor(Color.GRAY_100)} ${theme.background.primary}`};
  scrollbar-width: thin;
  :root {
 scrollbar-color: ${({ theme }: { theme: ThemeType }) =>
   theme.background.primary === getColor(Color.BLACK)
     ? `${getColor(Color.DARK_LIGHT_500)} ${theme.background.primary}`
     : `${getColor(Color.GRAY_100)} ${theme.background.primary}`};
    }
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px
      ${({ theme }: { theme: ThemeType }) =>
        theme.background.primary === getColor(Color.BLACK)
          ? getColor(Color.DARK_BLUE_500)
          : getColor(Color.GRAY_200)};
    background: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_BLUE_500)
        : getColor(Color.GRAY_200)};
  }
`

export const LogoText = styled.span`
  cursor: pointer;
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
