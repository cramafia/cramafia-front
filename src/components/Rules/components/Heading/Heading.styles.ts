import styled from 'styled-components'

import { getTypography, Typography } from '@/theme/typography'
import {
  getVerticalSpacingAsPixels,
  getUnitAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'

export const Container = styled.div`
  margin: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)} 0;
`

export const Text = styled.div`
  ${getTypography(Typography.BODY_REGULAR)}
  display: flex;
  justify-content: ${({ justify }: { justify: string }) => justify};
`

export const ListItem = styled.a`
  margin-right: ${getUnitAsPixels()};
`
