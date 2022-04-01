import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from 'src/redux/store'
import { AlertComponent, AlertContainer, AlertText } from './Alert.styles'
import { closeAlert } from '../../../redux/reducers/global.reducer'

export const Alert: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: stateType) => state.global.alert)
  const onClose = () => {
    dispatch(closeAlert())
  }
  return (
    alert && (
      <AlertContainer>
        <AlertComponent variant={alert?.type} onClose={onClose} dismissible>
          <AlertComponent.Heading>{alert?.title}</AlertComponent.Heading>
          <AlertText>{alert?.text}</AlertText>
        </AlertComponent>
      </AlertContainer>
    )
  )
}
