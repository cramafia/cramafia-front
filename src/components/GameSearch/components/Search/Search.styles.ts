import styled from 'styled-components'

import { getColor, Color } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { getVerticalSpacingAsPixels, VerticalSpacingType } from '@/theme/layout'
import { Col } from 'react-bootstrap'

export const Container = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  background: ${({ active }: { active: boolean }) =>
    active ? getColor(Color.GREEN_100) : getColor(Color.DARK_LIGHT_500)};
`

export const GameButton = styled(Button)`
  background: ${({ active }: { active: boolean }) =>
    active ? getColor(Color.PURPLE_200) : getColor(Color.DARK_LIGHT_500)};
`

export const SearchButton = styled(Button)`
  width: 100%;
  background: ${getColor(Color.DARK_LIGHT_500)};
  padding: ${getUnitAsPixels(3)} ${getUnitAsPixels()};
`
