import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from 'src/redux/store'
import {
  AlertComponent,
  AlertContainer,
  AlertText,
  AlertComponentHeading,
} from './Alert.styles'
import { addAlert, closeAlert } from '../../redux/reducers/global.reducer'
import { AlertType } from './Alert.types'

export const Alert: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: stateType) => state.global.alert)
  const onClose = () => {
    dispatch(closeAlert())
  }

  useEffect(() => {
    const alertInterval = setTimeout(() => dispatch(closeAlert()), 200000)
    return () => {
      clearTimeout(alertInterval)
    }
  }, [alert, dispatch])

  return (
    alert && (
      <AlertContainer>
        <AlertComponent variant={alert.type} onClose={onClose} dismissible>
          <AlertComponentHeading>{alert.title}</AlertComponentHeading>
          <AlertText>{alert.text}</AlertText>
        </AlertComponent>
      </AlertContainer>
    )
  )
}
