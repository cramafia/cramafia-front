import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '../../../theme/layout'
import { Color, getColor } from '../../../theme/color'
import { getTypography, Typography } from '../../../theme/typography'

export const RememberUser = styled.div`
  display: flex;
  align-items: center;
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
