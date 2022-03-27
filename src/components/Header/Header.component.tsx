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
import { openModal } from '../../redux/reducers/global.reducer'
import { useDispatch } from 'react-redux'
import { getModal } from '../Modals'
import { ModalType } from '../Modals'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }

  return (
    <HeaderContainer>
      <StyledNavbar expand={false} isExpand={false}>
        <Container fluid>
          <Logo href="">Logo</Logo>
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
                <Play onClick={onOpen.bind(this, ModalType.LOGIN)}>Играть</Play>
                <NavItem>
                  <Link href="/watch">Смотреть</Link>
                </NavItem>
                <NavItem>
                  <Link href="/rules">Правила</Link>
                </NavItem>
                <NavItem onClick={onOpen.bind(this, ModalType.LOGIN)}>
                  Вход
                </NavItem>
                <NavItem onClick={onOpen.bind(this, ModalType.REGISTER)}>
                  Регистрация
                </NavItem>
              </Nav>
            </Offcanvas.Body>
          </SideBar>
        </Container>
      </StyledNavbar>

      <StyledNavbar expand={true} isExpand={true}>
        <Logo href="">Logo</Logo>
        <Play onClick={onOpen.bind(this, ModalType.LOGIN)}>Играть</Play>
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
      </StyledNavbar>
    </HeaderContainer>
  )
}
