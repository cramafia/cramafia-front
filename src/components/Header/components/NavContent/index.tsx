import React from 'react'

import { NavItem, Play } from '../../Header.styles'
import { ButtonLink } from '@/components/ButtonLink'
import { User } from './../User'
import { useSelector, useDispatch } from 'react-redux'
import { getModal, ModalType } from '@/components/Modals'
import { openModal } from 'src/redux/reducers/global.reducer'
import { StateType } from 'src/redux/store'

export const NavContent = ({
  toggleExpanded,
}: {
  toggleExpanded: Function
}) => {
  const dispatch = useDispatch()
  const isAuthorized = useSelector(
    (state: StateType) => state.global.isAuthorized
  )

  const handleModalButtons = (type: ModalType) => {
    toggleExpanded(false)
    dispatch(openModal(getModal(type)))
  }

  const handleToggle = (b: boolean) => {
    toggleExpanded(b)
  }
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
          <NavItem onClick={handleModalButtons.bind(this, ModalType.REGISTER)}>
            Регистрация
          </NavItem>
        </>
      )}
    </>
  )
}
