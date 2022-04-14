import { Color, getColor } from '@/theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import styled from 'styled-components'

export const IconContainer = styled.span`
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`

export const OptionContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${getColor(Color.GREEN_100)};
  }
  background-color: ${({ selected }: { selected: boolean }) =>
    selected ? getColor(Color.GREEN_100) : getColor(Color.GRAY_500)};
  border-radius: ${getUnitAsPixels()};
  min-width: 130px;
  padding: ${getUnitAsPixels(2)};

  svg {
    path {
      fill: ${({ selected }: { selected: boolean }) =>
        selected ? getColor(Color.GREEN_100) : getColor(Color.WHITE)};
    }
  }
`

export const OptionText = styled.span`
  margin-left: ${getUnitAsPixels()};
  ${getTypography(Typography.BODY_MIN)};
`

export const SubText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
`
