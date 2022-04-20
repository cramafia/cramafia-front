import styled from 'styled-components'

import { getTypography, Typography } from '@/theme/typography'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '@/theme/layout'

export const RulesContainer = styled.div`
  ${getTypography(Typography.NAVIGATION)}
  display: flex;
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const Content = styled.div`
  padding-left: ${getUnitAsPixels(5)};
  width: 100%;
`

export const Spacer = styled.div`
  width: 100%;
  display: flex;
  margin: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)} 0;
`

export const Relative = styled.div`
  position: relative;
`
