import styled from 'styled-components'

import { Color, getColor } from '@/theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const OptionText = styled.span`
  margin-left: ${getUnitAsPixels()};
  color: ${({ selected }: { selected: boolean }) =>
    selected ? getColor(Color.WHITE) : getColor(Color.GRAY_100)};
  ${getTypography(Typography.BODY_MIN)};
  font-weight: 550;
  font-size: 14px;
  padding-top: 2px;
`

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
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  display: flex;
  width: auto;
  cursor: pointer;
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

export const SubOptionContainer = styled.div`
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  display: flex;
  width: auto;
  align-items: center;
  cursor: pointer;
  background-color: ${({ selected }: { selected: boolean }) =>
    selected ? getColor(Color.GREEN_100) : getColor(Color.GRAY_500)};
  border-radius: ${getUnitAsPixels()};
  min-width: 130px;
  padding: ${getUnitAsPixels(2)};

  ${({ canEdit, selected }: { canEdit: boolean; selected: boolean }) => {
    return !canEdit
      ? `cursor: not-allowed;
      background-color: ${getColor(Color.DARK_LIGHT_500)} `
      : `cursor: pointer;
    :hover {
      background-color: ${getColor(Color.GREEN_100)};
      span {
        color: ${getColor(Color.WHITE)};
      }
    }`
  }};

  svg {
    path {
      fill: ${({
        selected,
        canEdit,
      }: {
        selected: boolean
        canEdit: boolean
      }) => (selected ? getColor(Color.GREEN_100) : getColor(Color.WHITE))};
    }
  }
`
