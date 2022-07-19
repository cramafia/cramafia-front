import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'

import { getColor, Color, ThemeType } from '@/theme/color'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const CreateGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 40%;
  padding: 0px ${getUnitAsPixels(10)};
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
    width: 100%;
    padding: 0;
  }
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

export const GameNameInput = styled(Form.Control)`
  ${getTypography(Typography.BODY_SMALL)}
  width: 100%;
  height: ${getUnitAsPixels(6)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  border-radius: ${getUnitAsPixels()};
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.createLobby.gameNameInput};
  border: none;
  ${({ errorText }: { errorText: string; theme: ThemeType }) =>
    errorText && `border: 1px solid ${getColor(Color.RED_100)}`};
  font-weight: 550;
  :focus {
    border-color: ${getColor(Color.DARK_LIGHT_200)};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.createLobby.gameNameInput};
    ${({ errorText }: { errorText: string; theme: ThemeType }) =>
      errorText && `border: 1px solid ${getColor(Color.RED_100)}`};
  }
`

export const MinText = styled.span`
  ${getTypography(Typography.BODY_MIN)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  color: ${getColor(Color.GRAY_100)};
  font-size: 14px;
  font-weight: 550;
`

export const ErrorText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  color: ${getColor(Color.RED_100)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
`
