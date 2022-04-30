import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { authApi } from '@/services/authApi/auth.api'
import AuthHelper from '@/helpers/auth.helper'
import { Tokens } from '@/types/api.types'

import { CenteredContainer } from '../../../styles'
import { closeModal, openModal } from '../../../redux/reducers/global.reducer'
import { ModalType } from '..'
import { getModal } from '..'
import {
  CheckBox,
  HelperButtons,
  MainText,
  ModalContainer,
  ModalInput,
  SubmiteButton,
  SubText,
  MinText,
} from '../styles'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }

  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [login, { data }] = authApi.useLoginMutation()
  const handleUser = (field: string, e: any) => {
    setUser({
      ...user,
      [field]: e.target.value,
    })
  }

  const handleLogin = () => {
    login(user)
  }

  useEffect(() => {
    if (data?.access_token) {
      AuthHelper.setTokensFromData(data)
      dispatch(closeModal())
    }
  }, [data, dispatch])

  return (
    <ModalContainer>
      <MainText>Войти</MainText>
      <ModalInput
        placeholder="Никнейм/Email"
        value={user.username}
        onChange={handleUser.bind(this, 'username')}
      />
      <ModalInput
        type="password"
        placeholder="Пароль"
        value={user.password}
        onChange={handleUser.bind(this, 'password')}
      />
      <HelperButtons>
        <MinText isButton={true}>Забыли пароль?</MinText>
        <CenteredContainer align="center">
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </CenteredContainer>
      </HelperButtons>
      <SubmiteButton variant="warning" onClick={handleLogin}>
        Войти
      </SubmiteButton>
      <HelperButtons>
        <MinText>Нет аккаунта?</MinText>
        <MinText
          isButton={true}
          onClick={onOpen.bind(this, ModalType.REGISTER)}
        >
          Зарегистрировать аккаунт
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
