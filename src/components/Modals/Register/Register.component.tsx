import React, { FunctionComponent } from 'react'
import { MinText, TextContainer } from './Register.styles'

import {
  ModalContainer,
  MainText,
  ModalInput,
  HelperButtons,
  CheckBox,
  SubmiteButton,
} from '../styles'

export const Register: FunctionComponent = () => {
  return (
    <ModalContainer>
      <MainText>Зарегистрироваться</MainText>
      <ModalInput placeholder="Введите никнейм (Логин)" />
      <ModalInput placeholder="Введите е-mail" />
      <ModalInput placeholder="Придумайте пароль" />
      <ModalInput placeholder="Повторите пароль" />
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
    </ModalContainer>
  )
}
