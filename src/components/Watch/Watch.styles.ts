import { Table } from 'react-bootstrap'
import styled from 'styled-components'
import { Color, getColor, ThemeType } from '../../theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'
import { getTypography, Typography } from '../../theme/typography'

export const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const MainText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)}
`

export const SubText = styled.span`
  ${getTypography(Typography.NAVIGATION)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)}
`

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
