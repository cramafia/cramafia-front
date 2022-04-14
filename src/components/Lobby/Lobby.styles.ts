import styled from 'styled-components'
import { getColor, Color } from '@/theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const NewGameContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding: ${getUnitAsPixels(5)};

  background-color: ${getColor(Color.DARK_LIGHT_400)};
  border-radius: ${getUnitAsPixels()};
`

export const Title = styled.span`
  ${getTypography(Typography.BODY_REGULAR)}
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const GameSettingContainer = styled.div`
  display: flex;

  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const GameSetting = styled.div`
  display: flex;
  width: 60%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`

export const GameTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AdvancedSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`

export const CreateGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10%;
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
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  display: flex;
  width: auto;
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
  color: ${getColor(Color.GRAY_100)};
  ${getTypography(Typography.BODY_MIN)};
  font-weight: 600;
  font-size: 16px;
`

export const SubText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
`
