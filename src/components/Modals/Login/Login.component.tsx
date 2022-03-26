import React, { FunctionComponent } from 'react'
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
} from '../styles'

export const Login: FunctionComponent = () => {
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
        <MinText isButton={true}>Зарегистрировать аккаунт</MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
