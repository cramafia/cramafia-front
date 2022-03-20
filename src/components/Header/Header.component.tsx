import React, { FunctionComponent } from 'react'
import { NavItem, Navbar, Play, HeaderContainer } from './Header.styles'
import Link from 'next/link'

export const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <Navbar sticky="top">
        <Play>
          <Link href="/">Играть</Link>
        </Play>
        <NavItem>
          <Link href="/rooms">Смотреть</Link>
        </NavItem>
        <NavItem>
          <Link href="/rules">Правила</Link>
        </NavItem>
        <NavItem>
          <Link href="/login">Вход</Link>
        </NavItem>
        <NavItem>
          <Link href="/reg">Регистрация</Link>
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
