import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { ModalType, getModal } from '..'
import {
  addAlert,
  authorizeUser,
  closeModal,
  openModal,
} from '../../../redux/reducers/global.reducer'
import { CenteredContainer } from '../../../styles'
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

import AuthHelper from '@/helpers/auth.helper'
import { authApi } from '@/services/authApi/auth.api'
import { Error } from '@/types/api.types'
import { AlertType } from '@/components/Alert/Alert.types'

export const Login: React.FC = () => {
  const dispatch = useDispatch()
  const onOpen = (type: ModalType): void => {
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

  const handleSubmit = async (): Promise<void> => {
    await login(formik.values)
  }

  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    if (data?.access_token) {
      AuthHelper.setTokensFromData(data)
      dispatch(authorizeUser(!!data.access_token))
      dispatch(closeModal())
    }

    if (error) {
      const { data: errorData } = error as Error

      if(errorData?.message) {
        setErrorText(errorData?.message)
      } else {
        dispatch(addAlert({
          type: AlertType.DANGER,
          text: 'Oops! Something Went Wrong',
          title: 'ERROR'
        }))
      }
      
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
          <MinText isButton>Забыли пароль?</MinText>
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
        <MinText isButton onClick={() => onOpen(ModalType.REGISTER)}>
          Зарегистрировать аккаунт
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
