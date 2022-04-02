import React from 'react'
import { useDispatch } from 'react-redux'
import { CenteredContainer } from '../../../styles'
import { openModal, addAlert } from '../../../redux/reducers/global.reducer'
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

  return (
    <ModalContainer>
      <MainText>Войти</MainText>
      <ModalInput placeholder="Никнейм/Email" />
      <ModalInput type="password" placeholder="Пароль" />
      <HelperButtons>
        <MinText isButton={true}>Забыли пароль?</MinText>
        <CenteredContainer align="center">
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </CenteredContainer>
      </HelperButtons>
      <SubmiteButton variant="warning">Войти</SubmiteButton>
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
