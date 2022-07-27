import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { authApi } from 'src/services/authApi/auth.api'

import { ModalType, getModal } from '..'
import {
  openModal,
  closeModal,
  authorizeUser,
  addAlert,
} from '../../../redux/reducers/global.reducer'
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

import { Eula } from './Register.styles'

import { AlertType } from '@/components/Alert/Alert.types'
import AuthHelper from '@/helpers/auth.helper'
import { Error } from '@/types/api.types'

export const Register: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType): void => {
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
  const handleSubmit = async (): Promise<void> => {
    if (formik.values.password === formik.values.repeatPassword) {
      await registration({
        username: formik.values.username,
        password: formik.values.password,
      })
    } else {
      setErrorText('Пароли не совпадают')
    }
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
      const { data: errorData } = error as Error

      if (errorData?.message) {
        setErrorText(errorData.message)
      } else {
        dispatch(
          addAlert({
            type: AlertType.DANGER,
            text: 'Oops! Something Went Wrong',
            title: 'ERROR',
          })
        )
      }
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
          <MinText isButton>Правилами пользовтельского соглашения</MinText>
          <MinText> и </MinText>
          <MinText isButton>правилами обработки персональных данных</MinText>
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
        <MinText isButton onClick={() => onOpen(ModalType.LOGIN)}>
          Авторизироваться
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
