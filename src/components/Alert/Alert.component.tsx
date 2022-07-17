import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'
import {
  AlertComponent,
  AlertContainer,
  AlertText,
  AlertComponentHeading,
} from './Alert.styles'
import { closeAlert } from '../../redux/reducers/global.reducer'

export const Alert: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: StateType) => state.global.alert)
  const onClose = () => {
    dispatch(closeAlert())
  }

  useEffect(() => {
    const alertInterval = setTimeout(() => dispatch(closeAlert()), 4000)
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
