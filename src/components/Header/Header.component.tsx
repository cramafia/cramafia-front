import React from 'react'
import {
  NavItem,
  Play,
  HeaderContainer,
  Logo,
  StyledNavbar,
  SideBar,
  SideBarTitle,
} from './Header.styles'
import Link from 'next/link'
import { openModal, switchTheme } from '../../redux/reducers/global.reducer'
import { useDispatch } from 'react-redux'
import { getModal } from '../Modals'
import { ModalType } from '../Modals'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'
import { ButtonLink } from '../ButtonLink'
import { ThemeSwitcher } from './../ThemeSwitcher'
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
          <Link href="/game-search">Играть</Link>
        </Play>
        <NavItem>
          <Link href="/watch">Смотреть</Link>
        </NavItem>
        <NavItem>
          <Link href="/rules">Правила</Link>
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
