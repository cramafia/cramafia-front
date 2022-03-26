import styled from 'styled-components'
import { Nav, Button } from 'react-bootstrap'
import { ThemeType } from '../../theme/color'
import { getTypography, Typography } from '../../theme/typography'
import { getColor, Color } from '../../theme/color'
import { getUnitAsPixels } from '../../theme/layout'
import {
  getNormilizeComponentAsStyle,
  NormilizeComponents,
} from '../../theme/normilize'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${getUnitAsPixels(10.5)};
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const Navbar = styled(Nav)`
  display: flex;
`

export const NavItem = styled(Button)`
  ${getNormilizeComponentAsStyle(NormilizeComponents.BUTTON)}
  margin-right: ${getUnitAsPixels(1.5)};
  border: none;
  border-bottom: 1px solid transparent;
  background: inherit;
  :hover {
    background: inherit;
    border-radius: 0;
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    border-bottom-color: ${({ theme }: { theme: ThemeType }) =>
      theme.color.primary};
  }
  a {
    ${getTypography(Typography.NAVIGATION)}
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  }
`

export const Play = styled(NavItem)`
  padding: 0 ${getUnitAsPixels(4)};
  margin-right: ${getUnitAsPixels(3)};
  border: 1px solid ${getColor(Color.GREEN_100)};
  :hover {
    border: 1px solid ${getColor(Color.GREEN_100)};
    background: ${getColor(Color.GREEN_100)};
    border-radius: ${getUnitAsPixels(0.5)};
  }
`
