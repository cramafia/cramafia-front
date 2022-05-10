import { Theme, ThemeType } from '@/theme/color'
import React from 'react'

import { Navbar, Offcanvas, Nav } from 'react-bootstrap'
import { LogoText } from 'src/styles'
import { SideBar, SideBarTitle, MenuContainer } from './../../Header.styles'
import { NavContent } from './../NavContent'

export const MenuContent = ({
  theme,
  toggleExpanded,
}: {
  theme: Theme
  toggleExpanded: Function
}) => {
  const handleToggle = (b: boolean) => {
    toggleExpanded(b)
  }
  return (
    <MenuContainer fluid>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <SideBar
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header
          closeButton
          closeVariant={theme === Theme.BLACK ? 'white' : undefined}
        >
          <SideBarTitle
            id="offcanvasNavbarLabel"
            onClick={handleToggle.bind(this, false)}
          >
            <LogoText>CRAMAFIA</LogoText>
          </SideBarTitle>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavContent toggleExpanded={toggleExpanded} />
          </Nav>
        </Offcanvas.Body>
      </SideBar>
    </MenuContainer>
  )
}
