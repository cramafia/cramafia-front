import styled from 'styled-components'
import { Col } from 'react-bootstrap'

import {
  getColor,
  Color,
  ThemeType,
  getColorWithOpacity,
  Opacity,
} from '@/theme/color'
import { getMediaQuery, getUnitAsPixels, ScreenSize } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { getVerticalSpacingAsPixels, VerticalSpacingType } from '@/theme/layout'

export const Container = styled.div`
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.color.border};
  border-radius: ${getUnitAsPixels()};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding: ${getUnitAsPixels(3)};
`

export const Title = styled.div`
  ${getTypography(Typography.BODY_REGULAR)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
`

export const SubTitle = styled.div`
  ${getTypography(Typography.NAVIGATION)}
  color: ${getColor(Color.GRAY_200)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const GroupCol = styled(Col)`
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getTypography(Typography.BODY_MIN)};
  font-size: 14px;
  ${getMediaQuery(ScreenSize.MEDIUM, ScreenSize.XLARGE)} {
    .row {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      div {
        margin: ${getUnitAsPixels(0.5)};
      }
    }
  }
`

export const Buttons = styled.div``

export const Button = styled.div`
  border-radius: ${getUnitAsPixels()};
  padding: ${getUnitAsPixels(2)} ${getUnitAsPixels()};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${getColor(Color.WHITE)};
`

export const PlayerButton = styled(Button)`
  background: ${({ active, theme }: { active: boolean; theme: ThemeType }) =>
    active
      ? getColor(Color.GREEN_100)
      : theme.background.gameSearch.defaultButton};
`

export const GameButton = styled(Button)`
  background: ${({ active, theme }: { active: boolean; theme: ThemeType }) =>
    active
      ? getColor(Color.PURPLE_200)
      : theme.background.gameSearch.defaultButton};
`

export const SearchButton = styled(Button)`
  ${getTypography(Typography.BODY_SMALL)}
  width: 100%;
  background: ${({ theme }: { theme: ThemeType }) =>
    theme.background.gameSearch.defaultButton};
  padding: ${getUnitAsPixels(3)} ${getUnitAsPixels()};

  :hover {
    background: ${getColor(Color.GREEN_100)};
  }
`
