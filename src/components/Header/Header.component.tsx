import React from 'react'
import { NavItem, Navbar, Play, HeaderContainer } from './Header.styles'
import Link from 'next/link'
import { openModal } from '../../redux/reducers/global.reducer'
import { useDispatch } from 'react-redux'
import { ModalSize } from '../../theme/layout'
import { ModalType } from '../Modal/Modal.types'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType, size: ModalSize) => {
    dispatch(openModal({ type, size }))
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
        <NavItem onClick={onOpen.bind(this, ModalType.LOGIN, ModalSize.SMALL)}>
          Вход
        </NavItem>
        <NavItem
          onClick={onOpen.bind(this, ModalType.REGISTER, ModalSize.SMALL)}
        >
          Регистрация
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
