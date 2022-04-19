import styled from 'styled-components'

import { show } from '@/theme/animation'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { getColor, Color, ThemeType } from '@/theme/color'
import { StyledScroll } from '../../../../styles'

export const Wrapper = styled.div`
  height: calc(100vh - ${getUnitAsPixels(10.5)});
  min-width: 300px;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    display: none;
  }
`

export const Content = styled.div`
  width: 300px;
  position: fixed;
  top: 100px;
  animation: ${show} 1s ease;
`
//rgba(196, 196, 196, 0)
export const Heading = styled.div`
  ${getTypography(Typography.HEADING_3)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)}
`

export const List = styled.ul`
  overflow-y: scroll;
  ${StyledScroll}
  height: 75vh;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  font-weight: 550;
`

export const ListItemLink = styled.a`
  font-weight: 550;
  color: ${({ active, theme }: { active: boolean; theme: ThemeType }) =>
    active
      ? getColor(Color.GREEN_100)
      : theme.background.primary === getColor(Color.BLACK)
      ? getColor(Color.GRAY_100)
      : getColor(Color.DARK_LIGHT_300)};
  :hover {
    color: ${getColor(Color.GREEN_100)};
  }
`
