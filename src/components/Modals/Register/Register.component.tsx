import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import {
  openModal,
  closeModal,
  authorizeUser,
  addAlert,
} from '../../../redux/reducers/global.reducer'
import { ModalType } from '..'
import { getModal } from '..'
import {
  ModalContainer,
  MainText,
  ModalInput,
  HelperButtons,
  CheckBox,
  SubmiteButton,
  MinText,
  ErrorText,
} from '../styles'
import { authApi } from 'src/services/authApi/auth.api'
import AuthHelper from '@/helpers/auth.helper'
import { AlertType } from '@/components/Alert/Alert.types'

export const Register: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const [registration, { data, error, isLoading }] =
    authApi.useRegistrationMutation()

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [errorText, setErrorText] = useState('')
  const handleUser = (field: string, e: any) => {
    setUser({
      ...user,
      [field]: e.target.value,
    })
  }

  const handleRegistration = () => {
    registration(user)
  }

  useEffect(() => {
    if (data?.access_token) {
      AuthHelper.setTokensFromData(data)
      dispatch(closeModal())
      dispatch(
        addAlert({
          type: AlertType.SUCCESS,
          title: 'Успех',
          text: 'Вы успешно зарегистрировались',
        })
      )
      dispatch(authorizeUser(!!data.access_token))
    }
    if (error) {
      console.log(error)
      const { data } = error as any
      setErrorText(data?.message)
    }
  }, [data, dispatch, error])

  return (
    <ModalContainer>
      <MainText>Зарегистрироваться</MainText>
      <ModalInput
        placeholder="Введите никнейм (Логин)"
        onChange={handleUser.bind(this, 'username')}
        errorText={errorText}
      />
      <ModalInput
        placeholder="Придумайте пароль"
        onChange={handleUser.bind(this, 'password')}
        errorText={errorText}
      />
      <ModalInput placeholder="Повторите пароль" errorText={errorText} />
      <ErrorText>{errorText}</ErrorText>
      <HelperButtons>
        <CheckBox />
        <div>
          <MinText>Я согласен с </MinText>
          <MinText isButton={true}>
            Правилами пользовтельского соглашения
          </MinText>
          <MinText> и </MinText>
          <MinText isButton={true}>
            правилами обработки персональных данных
          </MinText>
        </div>
      </HelperButtons>
      <SubmiteButton
        variant="warning"
        onClick={handleRegistration}
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? <Spinner animation="border" /> : 'Зарегистрироваться'}
      </SubmiteButton>
      <HelperButtons>
        <MinText>Есть аккаунт?</MinText>
        <MinText isButton={true} onClick={onOpen.bind(this, ModalType.LOGIN)}>
          Авторизироваться
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
