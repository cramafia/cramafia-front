import styled from 'styled-components'
import { Nav, Button, Navbar, Offcanvas } from 'react-bootstrap'
import { getTheme, Theme, ThemeType } from '../../theme/color'
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

export const Logo = styled(Navbar.Brand)`
  width: 50%;
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary} !important;
  :hover {
    cursor: pointer;
  }
`

export const StyledNavbar = styled(Navbar)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${getColor(Color.WHITE)} !important;
  flex-wrap: nowrap;
  div > button {
    background-color: ${getColor(Color.WHITE)} !important;
  }
  ${({ isExpand, theme }: { isExpand?: boolean; theme: ThemeType }) =>
    (isExpand &&
      `
  display: flex;
  @media only screen and (max-width: 1000px) {
  display: none;
} 
`) ||
    `display: none;
  @media only screen and (max-width: 1000px) {
  display: flex;
  `};
`

export const NavItem = styled(Button)`
  ${getNormilizeComponentAsStyle(NormilizeComponents.BUTTON)}
  margin-right: ${getUnitAsPixels(1.5)};
  border: none;
  padding: ${getUnitAsPixels(0.5)} ${getUnitAsPixels(2.5)};
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
    padding: ${getUnitAsPixels(1.5)};
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
  .offcanvas-body > div {
    :first-child {
      width: 50%;
      margin-left: 22.5%;
    }
  }
`

export const SideBarTitle = styled(Offcanvas.Title)`
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
`
