import React, { SyntheticEvent, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { closeModal } from '../../redux/reducers/global.reducer'
import { StateType } from '../../redux/store'

import { Wrapper, Content, Cross } from './Modal.styles'

import { ModalSize } from '@/theme/layout'

export const Modal: React.FC = () => {
  const modal = useSelector((state: StateType) => state.global.modal)
  const ModalContent = modal?.ModalContent ?? Fragment
  const size = modal?.size ?? ModalSize.SMALL
  const dispatch = useDispatch()
  const onClose = (): void => {
    dispatch(closeModal())
  }

  const stopPropogation = (e: SyntheticEvent): void => {
    e.stopPropagation()
  }

  return (
    modal && (
      <Wrapper onClick={onClose}>
        <Content onClick={stopPropogation} size={size}>
          <Cross onClick={onClose} />
          <ModalContent />
        </Content>
      </Wrapper>
    )
  )
}
