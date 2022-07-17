import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'

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
import { Eula } from './Register.styles'

export const Register: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const [registration, { data, error, isLoading }] =
    authApi.useRegistrationMutation()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: () => {},
  })
  const [errorText, setErrorText] = useState('')
  const handleSubmit = () => {
    formik.values.password === formik.values.repeatPassword
      ? registration({
          username: formik.values.username,
          password: formik.values.password,
        })
      : setErrorText('Пароли не совпадают')
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
      const { data } = error as any
      setErrorText(data?.message)
    }
  }, [data, error])

  return (
    <ModalContainer>
      <MainText>Зарегистрироваться</MainText>
      <ModalInput
        placeholder="Введите никнейм (Логин)"
        errorText={errorText}
        type="text"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <ModalInput
        placeholder="Придумайте пароль"
        errorText={errorText}
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ModalInput
        placeholder="Повторите пароль"
        errorText={errorText}
        name="repeatPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
      <ErrorText>{errorText}</ErrorText>
      <HelperButtons>
        <CheckBox />
        <Eula>
          <MinText>Я согласен с </MinText>
          <MinText isButton={true}>
            Правилами пользовтельского соглашения
          </MinText>
          <MinText> и </MinText>
          <MinText isButton={true}>
            правилами обработки персональных данных
          </MinText>
        </Eula>
      </HelperButtons>
      <SubmiteButton
        variant="warning"
        onClick={handleSubmit}
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
