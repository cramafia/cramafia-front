import styled from 'styled-components'

import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../../../theme/layout'
import { getTypography, Typography } from '../../../../theme/typography'
import { getColor, Color } from '../../../../theme/color'

export const Wrapper = styled.div`
  height: calc(100vh - ${getUnitAsPixels(10.5)});
  width: 20%;
`

export const Content = styled.div`
  ${({ isFixed }: { isFixed: boolean }) =>
    isFixed &&
    `
    position: fixed;
    top: 10px;
  `}
`

export const Heading = styled.div`
  ${getTypography(Typography.SUB_HEADING_1)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)}
`

export const List = styled.ul`
  padding: 0;
`

export const ListItem = styled.li``

export const ListItemLink = styled.a`
  :hover {
    color: ${getColor(Color.GREEN_100)};
  }
`
