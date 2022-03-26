import React from 'react'
import { useDispatch } from 'react-redux'
import { ModalSize } from '../../../theme/layout'
import { ModalType } from '../../Modal/Modal.types'
import { openModal } from '../../../redux/reducers/global.reducer'

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
  const onOpen = (type: ModalType, size: ModalSize) => {
    dispatch(openModal({ type, size }))
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
      <SubmiteButton>Зарегистрироваться</SubmiteButton>
      <HelperButtons>
        <MinText>Есть аккаунт?</MinText>
        <MinText
          isButton={true}
          onClick={onOpen.bind(this, ModalType.LOGIN, ModalSize.SMALL)}
        >
          Авторизироваться
        </MinText>
      </HelperButtons>
    </ModalContainer>
  )
}
