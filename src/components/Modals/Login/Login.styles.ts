import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '../../../theme/layout'
import { Color, getColor } from '../../../theme/color'
import { getTypography, Typography } from '../../../theme/typography'

export const LoginContainer = styled.div`
  background-color: ${getColor(Color.DARK_LIGHT_300)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)}
`

export const LoginInput = styled(Form.Control)`
  width: 100%;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  border-radius: ${getUnitAsPixels()};
  background-color: ${getColor(Color.DARK_LIGHT_200)};
  border-color: ${getColor(Color.DARK_LIGHT_200)};
  font-weight: 550;
  :focus {
    background-color: ${getColor(Color.DARK_LIGHT_200)};
  }
`

export const SubText = styled.span`
  ${getTypography(Typography.NAVIGATION)}
  :hover {
    color: ${({ hoverStyles = false }: { hoverStyles?: boolean }) =>
      hoverStyles ? getColor(Color.BLUE_100) : ''};
    cursor: ${({ hoverStyles = false }: { hoverStyles?: boolean }) =>
      hoverStyles ? 'pointer' : ''};
  }
`

export const RememberUser = styled.div`
  display: flex;
  align-items: center;
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
`

export const HelperButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`
export const MinText = styled.span`
  ${getTypography(Typography.BODY_MIN)}
  font-weight: 500;
  border-bottom: ${({
    isBorder = false,
  }: {
    isBorder?: boolean
    hoverStyles?: boolean
  }) => (isBorder ? '1px solid' : '0px')};
  :hover {
    color: ${({
      hoverStyles = false,
    }: {
      isBorder?: boolean
      hoverStyles?: boolean
    }) => (hoverStyles ? getColor(Color.BLUE_100) : '')};
    cursor: ${({
      hoverStyles = false,
    }: {
      isBorder?: boolean
      hoverStyles?: boolean
    }) => (hoverStyles ? 'pointer' : '')};
  }
  border-bottom: ${({ isBorder = false }: { isBorder?: boolean }) =>
    isBorder ? '1px solid' : '0px'};
`
