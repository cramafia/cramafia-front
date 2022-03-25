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
  width: 335px;
  height: 308px;
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
`

export const SubText = styled.span`
  ${getTypography(Typography.NAVIGATION)}
`

export const RememberUser = styled.div`
  display: flex;
  align-items: center;
`

export const CheckBox = styled(Form.Check)`
  margin-right: ${getUnitAsPixels(1)};
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
  border-bottom: ${({ isBorder = false }: { isBorder?: boolean }) =>
    isBorder ? '1px solid' : '0px'};
`
