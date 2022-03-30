import styled from 'styled-components'

import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { getColor, Color, ThemeType } from '@/theme/color'

export const GameSearchContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const Col = styled.div`
  ${getTypography(Typography.NAVIGATION)}
`

export const NewGame = styled.div`
  border: 1px solid ${getColor(Color.GREEN_100)};
  border-radius: ${getUnitAsPixels()};
  background: ${getColor(Color.GREEN_100)};
  padding: ${getUnitAsPixels()} ${getUnitAsPixels(9)};
  cursor: pointer;
  :hover {
    background: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    border: 1px solid ${getColor(Color.GREEN_100)};
  }
`
