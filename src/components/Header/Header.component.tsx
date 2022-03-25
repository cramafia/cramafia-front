import React from 'react'
import { NavItem, Navbar, Play, HeaderContainer } from './Header.styles'
import Link from 'next/link'
import { openModal } from '../../redux/reducers/global.reducer'
import { useDispatch } from 'react-redux'
import { ModalSize } from '../../theme/layout'
import { ModalType } from '../Modal/Modal.types'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal({ type, size: ModalSize.SMALL }))
  }
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
        <NavItem onClick={onOpen.bind(this, ModalType.LOGIN)}>Вход</NavItem>
        <NavItem onClick={onOpen.bind(this, ModalType.LOGIN)}>
          Регистрация
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}
