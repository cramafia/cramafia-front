import styled from 'styled-components'
import { show } from '@/theme/animation'

import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../../../theme/layout'
import { getTypography, Typography } from '../../../../theme/typography'
import { getColor, Color } from '../../../../theme/color'

export const Wrapper = styled.div`
  height: calc(100vh - ${getUnitAsPixels(10.5)});
  min-width: 300px;
`

export const Content = styled.div`
  ${({ isFixed }: { isFixed: boolean }) =>
    isFixed &&
    `
    width: 300px;
    position: fixed;
    top: 10px;
  `}
  animation: ${show} 1s ease;
`
//rgba(196, 196, 196, 0)
export const Heading = styled.div`
  ${getTypography(Typography.HEADING_3)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)}
`

export const List = styled.ul`
  overflow-y: scroll;
  height: 70vh;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  font-weight: 550;
`

export const ListItemLink = styled.a`
  font-weight: 550;
  color: ${({ active }: { active: boolean }) =>
    active ? getColor(Color.GREEN_100) : getColor(Color.GRAY_100)};
  :hover {
    color: ${getColor(Color.GREEN_100)};
  }
`
