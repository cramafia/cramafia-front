import React from 'react'
import { useDispatch } from 'react-redux'
import { ModalSize } from '../../../theme/layout'
import {
  openModal,
  openAlert,
  closeAlert,
} from '../../../redux/reducers/global.reducer'
import { ModalType } from '..'
import { getModal } from '..'

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
  const dispatch = useDispatch()
  const onOpen = (type: ModalType) => {
    dispatch(openModal(getModal(type)))
  }
  const onSubmit = (type: string, title: string, text: string) => {
    dispatch(openAlert({ type, title, text }))
    const closeAlertHandler = setTimeout(() => dispatch(closeAlert()), 4000)
  }
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
      <SubmiteButton
        onClick={onSubmit.bind(
          this,
          'danger',
          'Error',
          'Авторизация находится в разработке'
        )}
      >
        Зарегистрироваться
      </SubmiteButton>
      <HelperButtons>
        <MinText>Есть аккаунт?</MinText>
        <MinText isButton={true} onClick={onOpen.bind(this, ModalType.LOGIN)}>
          Авторизироваться
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
