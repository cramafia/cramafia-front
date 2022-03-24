import React, { FunctionComponent } from 'react'
import {
  LoginContainer,
  MainText,
  LoginInput,
  Description,
  SubText,
  RememberUser,
  CheckBox,
  SubmiteButton,
  RegisterAccount,
  MinText,
} from './Login.styles'

export const Login: FunctionComponent = () => {
  return (
    <LoginContainer>
      <MainText>Войти</MainText>
      <LoginInput placeholder="Никнейм/Email" />
      <LoginInput type="password" placeholder="Пароль" />
      <Description>
        <SubText>Забыли пароль?</SubText>
        <RememberUser>
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </RememberUser>
      </Description>
      <SubmiteButton variant="warning">Войти</SubmiteButton>
      <RegisterAccount>
        <MinText>Нет аккаунта?</MinText>
        <MinText isBorder={true}>Зарегистрировать аккаунт</MinText>
      </RegisterAccount>
    </LoginContainer>
  )
}
