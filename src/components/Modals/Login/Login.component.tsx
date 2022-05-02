import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import { authApi } from '@/services/authApi/auth.api'
import AuthHelper from '@/helpers/auth.helper'
import { AlertType } from '@/components/Alert/Alert.types'

import { CenteredContainer } from '../../../styles'
import {
  addAlert,
  authorizeUser,
  closeModal,
  openModal,
  setUser,
} from '../../../redux/reducers/global.reducer'
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
  ErrorText,
} from '../styles'
import { usersApi } from '@/services/usersApi/users.api'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const [login, { data, error, isLoading }] = authApi.useLoginMutation()

  const [userField, setUserField] = useState({
    username: '',
    password: '',
  })

  const [errorText, setErrorText] = useState('')
  const handleUser = (field: string, e: any) => {
    setUserField({
      ...userField,
      [field]: e.target.value,
    })
  }

  const handleLogin = () => {
    login(userField)
  }

  useEffect(() => {
    if (data?.access_token) {
      AuthHelper.setTokensFromData(data)
      dispatch(closeModal())
      dispatch(authorizeUser(!!data.access_token))
    }
    if (error) {
      const { data } = error as any
      setErrorText(data?.message)
    }
  }, [data, error])

  return (
    <ModalContainer>
      <MainText>Войти</MainText>

      <ModalInput
        placeholder="Никнейм"
        value={userField.username}
        onChange={handleUser.bind(this, 'username')}
        errorText={errorText}
      />
      <ModalInput
        type="password"
        placeholder="Пароль"
        value={userField.password}
        onChange={handleUser.bind(this, 'password')}
        errorText={errorText}
      />
      <ErrorText>{errorText}</ErrorText>
      <HelperButtons>
        <MinText isButton={true}>Забыли пароль?</MinText>
        <CenteredContainer align="center">
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </CenteredContainer>
      </HelperButtons>
      <SubmiteButton
        variant="warning"
        onClick={handleLogin}
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? <Spinner animation="border" /> : 'Войти'}
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
