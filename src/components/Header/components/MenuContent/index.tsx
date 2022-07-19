import React from 'react'
import { Navbar, Offcanvas, Nav } from 'react-bootstrap'
import { LogoText } from 'src/styles'

import { SideBar, SideBarTitle, MenuContainer } from '../../Header.styles'
import { NavContent } from '../NavContent'

import { Props } from './types'

import { Theme } from '@/theme/color'

export const MenuContent: React.FC<Props> = ({ theme, toggleExpanded }) => {
  const handleToggle = (b: boolean): void => {
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
            onClick={() => handleToggle(false)}
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
