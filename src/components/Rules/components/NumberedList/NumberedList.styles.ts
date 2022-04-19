import styled from 'styled-components'

import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
  getUnitAsPixels,
} from '@/theme/layout'

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.span`
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  line-height: ${getUnitAsPixels(3)};
`
