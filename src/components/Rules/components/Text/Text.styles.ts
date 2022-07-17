import styled from 'styled-components'

import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'

export const TextContainer = styled.div`
  line-height: ${getUnitAsPixels(5)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`
