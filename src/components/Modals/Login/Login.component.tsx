import React, { FunctionComponent } from 'react'
import {
  CheckBox,
  HelperButtons,
  MainText,
  ModalContainer,
  ModalInput,
  SubmiteButton,
  SubText,
} from '../styles'
import { RememberUser, MinText } from './Login.styles'

export const Login: FunctionComponent = () => {
  return (
    <ModalContainer>
      <MainText>Войти</MainText>
      <ModalInput placeholder="Никнейм/Email" />
      <ModalInput type="password" placeholder="Пароль" />
      <HelperButtons>
        <SubText>Забыли пароль?</SubText>
        <RememberUser>
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </RememberUser>
      </HelperButtons>
      <SubmiteButton variant="warning">Войти</SubmiteButton>
      <HelperButtons>
        <MinText>Нет аккаунта?</MinText>
        <MinText isBorder={true} hoverStyles={true}>
          Зарегистрировать аккаунт
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
