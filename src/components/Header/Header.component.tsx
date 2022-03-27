import React from 'react'
import { NavItem, Navbar, Play, HeaderContainer } from './Header.styles'
import Link from 'next/link'
import { openModal } from '../../redux/reducers/global.reducer'
import { useDispatch } from 'react-redux'
import { getModal } from '../Modals'
import { ModalSize } from '../../theme/layout'
import { ModalType } from '../Modals'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <Navbar sticky="top">
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
      </Navbar>
    </HeaderContainer>
  )
}
