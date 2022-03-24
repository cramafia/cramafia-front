import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'

export const PageContainer = styled(Container)`
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
`
