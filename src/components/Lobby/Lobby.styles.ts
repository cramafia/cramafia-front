import styled from 'styled-components'
import { getColor, Color } from '@/theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { Button } from 'react-bootstrap'

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
  width: 100%;
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
  width: 25%;
`

export const AdvancedSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
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
  align-items: center;

  ${({
    gameType,
    currentGame,
    selected,
  }: {
    gameType: string | null
    currentGame: string
    selected: boolean
  }) => {
    return currentGame === 'classic' && gameType === null
      ? `cursor: not-allowed;`
      : `cursor: pointer;
    :hover {
      background-color: ${getColor(Color.GREEN_100)};
      span {
        color: ${getColor(Color.WHITE)};
      }
    }`
  }};

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
  color: ${({ selected }: { selected: boolean }) =>
    selected ? getColor(Color.WHITE) : getColor(Color.GRAY_100)};
  ${getTypography(Typography.BODY_MIN)};
  font-weight: 550;
  font-size: 14px;
`

export const SubText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const MinText = styled.span`
  ${getTypography(Typography.BODY_MIN)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  color: ${getColor(Color.GRAY_100)};
  font-size: 14px;
  font-weight: 550;
`

export const CreateGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  padding: 0px ${getUnitAsPixels(10)};
`

export const CreateGameButton = styled(Button)`
  width: 100%;
  height: ${getUnitAsPixels(7)};
  border-radius: ${getUnitAsPixels()};
  background: ${getColor(Color.GRAY_500)};
  color: ${getColor(Color.WHITE)};
  border: none;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  :hover,
  :focus {
    background: ${getColor(Color.GREEN_100)};
    color: ${getColor(Color.BLACK)};
    border-color: ${getColor(Color.GREEN_100)};
  }
`
