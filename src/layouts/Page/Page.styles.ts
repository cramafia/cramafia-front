import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import { ThemeType } from '@/theme/color'
import { getVerticalSpacingAsPixels, VerticalSpacingType } from '@/theme/layout'

export const PageContainer = styled.div`
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
`

export const HeaderContainer = styled(Container)`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary};
  z-index: 3;
`
