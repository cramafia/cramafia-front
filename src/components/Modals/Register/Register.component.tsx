import React, { FunctionComponent } from 'react'
import {
  RegisterContainer,
  MainText,
  HelperButtons,
  CheckBox,
  RegisterInput,
  MinText,
  SubmiteButton,
  TextContainer,
} from './Register.styles'

export const Register: FunctionComponent = () => {
  return (
    <RegisterContainer>
      <MainText>Зарегистрироваться</MainText>
      <RegisterInput placeholder="Введите никнейм (Логин)" />
      <RegisterInput placeholder="Введите е-mail" />
      <RegisterInput placeholder="Придумайте пароль" />
      <RegisterInput placeholder="Повторите пароль" />
      <HelperButtons>
        <CheckBox />
        <TextContainer>
          <MinText>Я согласен с </MinText>
          <MinText isBorder={true}>
            Правилами пользовтельского соглашения
          </MinText>
          <MinText> и </MinText>
          <MinText isBorder={true}>
            правилами обработки персональных данных
          </MinText>
        </TextContainer>
      </HelperButtons>
      <SubmiteButton>Зарегистрироваться</SubmiteButton>
      <HelperButtons>
        <MinText>Есть аккаунт?</MinText>
        <MinText isBorder={true} hoverStyles={true}>
          Авторизироваться
        </MinText>
      </HelperButtons>
    </RegisterContainer>
  )
}
