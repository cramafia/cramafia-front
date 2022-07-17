import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'

import { authApi } from '@/services/authApi/auth.api'

import AuthHelper from '@/helpers/auth.helper'

import { CenteredContainer } from '../../../styles'
import {
  authorizeUser,
  closeModal,
  openModal,
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

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const [login, { data, error, isLoading }] = authApi.useLoginMutation()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: () => {},
  })

  const handleSubmit = () => {
    login(formik.values)
  }

  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    if (data?.access_token) {
      AuthHelper.setTokensFromData(data)
      dispatch(authorizeUser(!!data.access_token))
      dispatch(closeModal())
    }
    if (error) {
      const { data } = error as any
      setErrorText(data?.message)
    }
  }, [data, error, dispatch])

  return (
    <ModalContainer>
      <MainText>Войти</MainText>
      <form>
        <ModalInput
          placeholder="Никнейм"
          errorText={errorText}
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <ModalInput
          type="password"
          placeholder="Пароль"
          name="password"
          errorText={errorText}
          onChange={formik.handleChange}
          value={formik.values.password}
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
          isLoading={isLoading}
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? <Spinner animation="border" /> : 'Войти'}
        </SubmiteButton>
      </form>
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
