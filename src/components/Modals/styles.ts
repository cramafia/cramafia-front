import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import { Color, getColor, ThemeType } from '../../theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'
import { getTypography, Typography } from '../../theme/typography'

export const ModalContainer = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainText = styled.span`
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const ModalInput = styled(Form.Control)`
  width: 100%;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  border-radius: ${getUnitAsPixels()};
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary === getColor(Color.BLACK)
      ? getColor(Color.DARK_LIGHT_200)
      : getColor(Color.WHITE)};
  border-color: ${getColor(Color.DARK_LIGHT_200)};
  font-weight: 550;
  :focus {
    border-color: ${getColor(Color.DARK_LIGHT_200)};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_LIGHT_200)
        : getColor(Color.WHITE)};
  }
  ${({ errorText, theme }: { errorText: string; theme: ThemeType }) =>
    !!errorText && `border: 1px solid ${getColor(Color.RED_100)}`};
`

export const SubText = styled.span`
  ${getTypography(Typography.NAVIGATION)}
  :hover {
    color: ${({ hoverStyles = false }: { hoverStyles?: boolean }) =>
      hoverStyles ? getColor(Color.GREEN_100) : ''};
    cursor: ${({ hoverStyles = false }: { hoverStyles?: boolean }) =>
      hoverStyles ? 'pointer' : ''};
  }
`

export const HelperButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const CheckBox = styled(Form.Check)`
  margin-right: ${getUnitAsPixels(1)};
  cursor: pointer;
`

export const SubmiteButton = styled(Button)`
  width: 100%;
  border-radius: ${getUnitAsPixels()};
  background: ${getColor(Color.YELLOW_100)};
  color: ${getColor(Color.BLACK)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  :hover,
  :focus {
    background: ${getColor(Color.GREEN_100)};
    color: ${getColor(Color.BLACK)};
    border-color: ${getColor(Color.GREEN_100)};
  }
  ${({ isLoading, theme }: { isLoading: boolean; theme: ThemeType }) =>
    isLoading &&
    `background-color:${getColor(Color.GRAY_200)}; 
        :hover, focus{ 
          background: ${getColor(Color.GRAY_200)}; 
          cursor: progress;
        };
        `}
`

export const MinText = styled.span`
  ${getTypography(Typography.BODY_MIN)}
  font-weight: 500;
  border-bottom: ${({ isButton = false }: { isButton?: boolean }) =>
    isButton ? '1px solid' : '0px'};
  :hover {
    color: ${({
      isButton = false,
      theme,
    }: {
      isButton?: boolean
      theme: ThemeType
    }) => (isButton ? getColor(Color.GREEN_100) : theme.background.opposite)};
    cursor: ${({ isButton = false }: { isButton?: boolean }) =>
      isButton ? 'pointer' : 'initial'};
  }
`

export const ErrorText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  color: ${getColor(Color.RED_100)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
  margin-top: -${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
`
