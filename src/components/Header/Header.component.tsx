import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'

import { ButtonLink } from '@/components/ButtonLink'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Theme } from '@/theme/color'

import { User } from './components/User'
import { stateType } from 'src/redux/store'
import { LogoText } from 'src/styles'
import {
  NavItem,
  Play,
  HeaderContainer,
  Logo,
  StyledNavbar,
  SideBar,
  SideBarTitle,
  MenuContainer,
} from './Header.styles'
import { openModal } from '../../redux/reducers/global.reducer'
import { getModal } from '../Modals'
import { ModalType } from '../Modals'

export const Header: React.FC = () => {
  const theme: Theme = useSelector((state: stateType) => state.global.theme)
  const dispatch = useDispatch()
  const [isExpanded, toggleExpanded] = useState(false)
  const handleModalButtons = (type: ModalType) => {
    toggleExpanded(false)
    dispatch(openModal(getModal(type)))
  }

  const handleToggle = (b: boolean) => {
    toggleExpanded(b)
  }

  const { isAuthorized } = useSelector((state: any) => state.global)

  const NavContent = () => {
    return (
      <>
        <Play onClick={handleToggle.bind(this, false)}>
          <ButtonLink href="/game-search">Играть</ButtonLink>
        </Play>
        <NavItem onClick={handleToggle.bind(this, false)}>
          <ButtonLink href="/watch">Смотреть</ButtonLink>
        </NavItem>
        <NavItem onClick={handleToggle.bind(this, false)}>
          <ButtonLink href="/rules">Правила</ButtonLink>
        </NavItem>
        {isAuthorized ? (
          <User />
        ) : (
          <>
            <NavItem onClick={handleModalButtons.bind(this, ModalType.LOGIN)}>
              Вход
            </NavItem>
            <NavItem
              onClick={handleModalButtons.bind(this, ModalType.REGISTER)}
            >
              Регистрация
            </NavItem>
          </>
        )}
      </>
    )
  }

  const MenuContent = () => {
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
              <NavContent />
            </Nav>
          </Offcanvas.Body>
        </SideBar>
      </MenuContainer>
    )
  }

  return (
    <HeaderContainer>
      <Logo>
        <ButtonLink href="/">
          <LogoText>CRAMAFIA</LogoText>
        </ButtonLink>
        <ThemeSwitcher />
      </Logo>
      <StyledNavbar
        expand={false}
        onToggle={toggleExpanded}
        expanded={isExpanded}
      >
        <MenuContent />
      </StyledNavbar>
      <StyledNavbar expand={true}>
        <NavContent />
      </StyledNavbar>
    </HeaderContainer>
  )
}
