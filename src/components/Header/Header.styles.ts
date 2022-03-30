import styled from 'styled-components'
import { Button, Navbar, Offcanvas } from 'react-bootstrap'
import { ThemeType } from '../../theme/color'
import { getTypography, Typography } from '../../theme/typography'
import { getColor, Color } from '../../theme/color'
import { getMediaQuery, getUnitAsPixels, ScreenSize } from '../../theme/layout'
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

export const Logo = styled.div`
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  :hover {
    cursor: pointer;
  }
  a {
    ${getTypography(Typography.BODY_REGULAR)}
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    padding: ${getUnitAsPixels(1.5)};
  }
`

export const StyledNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  color: ${getColor(Color.WHITE)} !important;
  flex-wrap: nowrap;
  div > button {
    background-color: ${getColor(Color.WHITE)} !important;
  }
  ${({ expand }: { expand?: boolean; theme: ThemeType }) =>
    (expand &&
      `
  display: none;
  ${getMediaQuery(ScreenSize.LARGE)} {
  display: flex;
} 
`) ||
    `display: flex;
  ${getMediaQuery(ScreenSize.LARGE)} {
  display: none;
  `};
`

export const NavItem = styled(Button)`
  ${getNormilizeComponentAsStyle(NormilizeComponents.BUTTON)}
  margin-right: ${getUnitAsPixels(1.5)};
  border: none;
  border-bottom: 1px solid transparent;
  background: inherit;
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  :hover {
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    background: inherit;
    border-radius: 0;
    border-bottom-color: ${({ theme }: { theme: ThemeType }) =>
      theme.color.primary};
  }
  a {
    ${getTypography(Typography.NAVIGATION)}
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    padding: ${getUnitAsPixels(1)} ${getUnitAsPixels(3)};
  }
`

export const Play = styled(NavItem)`
  padding: ${getUnitAsPixels(0.7)} ${getUnitAsPixels(4)};
  margin-right: ${getUnitAsPixels(3)};
  border: 1px solid ${getColor(Color.GREEN_100)};
  :hover {
    border: 1px solid ${getColor(Color.GREEN_100)};
    background: ${getColor(Color.GREEN_100)};
    border-radius: ${getUnitAsPixels(0.5)};
  }
`

export const SideBar = styled(Navbar.Offcanvas)`
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary};
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary} !important;
  button {
    :first-child {
      margin: auto;
    }
  }
`

export const SideBarTitle = styled(Offcanvas.Title)`
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
`
