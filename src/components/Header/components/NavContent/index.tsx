import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from 'src/redux/reducers/global.reducer'
import { StateType } from 'src/redux/store'

import { NavItem, Play } from '../../Header.styles'
import { User } from '../User'

import { Props } from './types'

import { ButtonLink } from '@/components/ButtonLink'
import { getModal, ModalType } from '@/components/Modals'

export const NavContent: React.FC<Props> = ({ toggleExpanded }) => {
  const dispatch = useDispatch()
  const isAuthorized = useSelector(
    (state: StateType) => state.global.isAuthorized
  )

  const handleModalButtons = (type: ModalType): void => {
    toggleExpanded(false)
    dispatch(openModal(getModal(type)))
  }

  const handleToggle = (b: boolean): void => {
    toggleExpanded(b)
  }

  return (
    <>
      <Play onClick={() => handleToggle(false)}>
        <ButtonLink href="/game-search">Играть</ButtonLink>
      </Play>
      <NavItem onClick={() => handleToggle(false)}>
        <ButtonLink href="/watch">Смотреть</ButtonLink>
      </NavItem>
      <NavItem onClick={() => handleToggle(false)}>
        <ButtonLink href="/rules">Правила</ButtonLink>
      </NavItem>
      {isAuthorized ? (
        <User />
      ) : (
        <>
          <NavItem onClick={() => handleModalButtons(ModalType.LOGIN)}>
            Вход
          </NavItem>
          <NavItem onClick={() => handleModalButtons(ModalType.REGISTER)}>
            Регистрация
          </NavItem>
        </>
      )}
    </>
  )
}
