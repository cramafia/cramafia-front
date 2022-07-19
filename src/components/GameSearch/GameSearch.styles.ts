import styled from 'styled-components'

import { getColor, Color, ThemeType } from '@/theme/color'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const GameSearchContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const LivePlayers = styled.div`
  display: inline-flex;
  padding: ${getUnitAsPixels(3)};
  ${getTypography(Typography.BODY_SMALL)}
  border: 1px solid
    ${({ theme }: { theme: ThemeType }) => theme.color.border};
  border-radius: ${getUnitAsPixels()};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
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
  padding: ${getUnitAsPixels(1.5)} ${getUnitAsPixels(9)};
  color: ${getColor(Color.WHITE)};
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
  padding: ${getUnitAsPixels(1.5)} ${getUnitAsPixels(9)};
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
