import styled from 'styled-components'

import { ThemeType, getColor, Color } from '@/theme/color'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
  getMediaQuery,
  ScreenSize,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${getUnitAsPixels()};
  padding: ${({ isBorder }: { isBorder: boolean }) =>
    isBorder && `${getUnitAsPixels()} ${getUnitAsPixels(9)}`};
  border: ${({
    isBorder,
    borderColor,
    theme,
  }: {
    isBorder: boolean
    borderColor: Color | null
    theme: ThemeType
  }) =>
    isBorder &&
    `1px solid ${borderColor ? getColor(borderColor) : theme.color.primary}`};
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    border: none;
  }
`

export const Text = styled.span`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  text-align: center;
`

export const Title = styled.span`
  margin-left: ${getUnitAsPixels()};
  ${getTypography(Typography.BODY_REGULAR)}
`
