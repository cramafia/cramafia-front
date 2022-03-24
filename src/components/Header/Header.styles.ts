import styled from 'styled-components'
import { Nav, Button } from 'react-bootstrap'
import { ThemeType } from '../../theme/color'
import { getTypography, Typography } from '../../theme/typography'
import { getColor, Color } from '../../theme/color'
import { getUnitAsPixels } from '../../theme/layout'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${getUnitAsPixels(10.5)};
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`

export const Navbar = styled(Nav)`
  display: flex;
`

export const NavItem = styled(Button)`
  margin-right: ${getUnitAsPixels(1.5)};
  border: none;
  background: inherit;
  :hover {
    background: inherit;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${getColor(Color.WHITE)};
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
