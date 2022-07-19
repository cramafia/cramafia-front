import styled from 'styled-components'

import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
  getMediaQuery,
  ScreenSize,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const RulesContainer = styled.div`
  ${getTypography(Typography.NAVIGATION)}
  display: flex;
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  overflow-x: hidden;
`

export const Content = styled.div`
  padding-left: ${getUnitAsPixels(5)};
  width: 100%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.SMALL)} {
    padding-left: 0;
  }
`

export const Spacer = styled.div`
  width: 100%;
  display: flex;
  margin: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)} 0;
`

export const Relative = styled.div`
  position: relative;
`
