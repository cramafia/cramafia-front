import styled from 'styled-components'
import { Container } from 'react-bootstrap'

import {
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'
import { ThemeType } from '@/theme/color'

export const PageContainer = styled.div`
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
`

export const HeaderContainer = styled(Container)`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary};
`
