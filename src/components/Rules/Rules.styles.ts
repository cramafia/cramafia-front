import styled from 'styled-components'
import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'

export const RulesContainer = styled.div`
  display: flex;
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const Content = styled.div`
  height: 2000px;
  width: 100%;
`
