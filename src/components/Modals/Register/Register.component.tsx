import React from 'react'

import {
  ModalContainer,
  MainText,
  ModalInput,
  HelperButtons,
  CheckBox,
  SubmiteButton,
  MinText,
} from '../styles'

export const Register: React.FC = () => {
  return (
    <ModalContainer>
      <MainText>Зарегистрироваться</MainText>
      <ModalInput placeholder="Введите никнейм (Логин)" />
      <ModalInput placeholder="Введите е-mail" />
      <ModalInput placeholder="Придумайте пароль" />
      <ModalInput placeholder="Повторите пароль" />
      <HelperButtons>
        <CheckBox />
        <div>
          <MinText>Я согласен с </MinText>
          <MinText isButton={true}>
            Правилами пользовтельского соглашения
          </MinText>
          <MinText> и </MinText>
          <MinText isButton={true}>
            правилами обработки персональных данных
          </MinText>
        </div>
      </HelperButtons>
      <SubmiteButton>Зарегистрироваться</SubmiteButton>
      <HelperButtons>
        <MinText>Есть аккаунт?</MinText>
        <MinText isButton={true}>Авторизироваться</MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
