import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { openModal } from '../../../redux/reducers/global.reducer'
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
} from '../styles'
import { authApi } from 'src/services/authApi/auth.api'

export const Register: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const [registration, { data }] = authApi.useRegistrationMutation()

  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const handleUser = (field: string, e: any) => {
    setUser({
      ...user,
      [field]: e.target.value,
    })
  }

  useEffect(() => {
    if (data?.access_token) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)
    }
  }, [data])

  const handleRegistration = () => {
    registration(user)
  }

  return (
    <ModalContainer>
      <MainText>Зарегистрироваться</MainText>
      <ModalInput
        placeholder="Введите никнейм (Логин)"
        onChange={handleUser.bind(this, 'username')}
      />
      <ModalInput placeholder="Введите е-mail" />
      <ModalInput
        placeholder="Придумайте пароль"
        onChange={handleUser.bind(this, 'password')}
      />
      <ModalInput placeholder="Повторите пароль" />
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
      <SubmiteButton onClick={handleRegistration}>
        Зарегистрироваться
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
