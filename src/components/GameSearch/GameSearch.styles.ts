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

export const TableHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const TableHeaderCol = styled.div`
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

export const ToLobbie = styled.div`
  margin: 0 auto;
  display: flex;
  border-radius: ${getUnitAsPixels()};
  background: ${({ theme }: { theme: ThemeType }) => theme.background.primary};
  padding: ${getUnitAsPixels()} ${getUnitAsPixels(9)};
  border: 1px solid ${getColor(Color.DARK_LIGHT_500)};
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  cursor: pointer;
  :hover {
    background: ${({ theme }: { theme: ThemeType }) =>
      theme.background.opposite};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.opposite};
  }
`

export const ToLobbieContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  display: flex;
  width: 100%;
  justify-content: center;
`
