import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import { Color, getColor } from '../../../theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../../theme/layout'
import { getTypography, Typography } from '../../../theme/typography'

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
  }
`

export const TextContainer = styled.div`
  > span {
    cursor: pointer;
  }
`
