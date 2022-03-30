import styled from 'styled-components'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'

export const PageContainer = styled.div`
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
`
