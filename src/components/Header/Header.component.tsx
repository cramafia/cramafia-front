import React from 'react'
import { useDispatch } from 'react-redux'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'

import { ButtonLink } from '@/components/ButtonLink'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

import {
  NavItem,
  Play,
  HeaderContainer,
  Logo,
  StyledNavbar,
  SideBar,
  SideBarTitle,
} from './Header.styles'
import { openModal, switchTheme } from '../../redux/reducers/global.reducer'
import { getModal } from '../Modals'
import { ModalType } from '../Modals'
import { LogoText } from 'src/styles'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }

  const NavContent = () => {
    return (
      <>
        <Play>
          <ButtonLink href="/game-search">Играть</ButtonLink>
        </Play>
        <NavItem>
          <ButtonLink href="/watch">Смотреть</ButtonLink>
        </NavItem>
        <NavItem>
          <ButtonLink href="/rules">Правила</ButtonLink>
        </NavItem>
        <NavItem onClick={onOpen.bind(this, ModalType.LOGIN)}>Вход</NavItem>
        <NavItem onClick={onOpen.bind(this, ModalType.REGISTER)}>
          Регистрация
        </NavItem>
      </>
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
      <StyledNavbar expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <SideBar
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <SideBarTitle id="offcanvasNavbarLabel">Logo</SideBarTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavContent />
              </Nav>
            </Offcanvas.Body>
          </SideBar>
        </Container>
      </StyledNavbar>
      <StyledNavbar expand={true}>
        <NavContent />
      </StyledNavbar>
    </HeaderContainer>
  )
}
