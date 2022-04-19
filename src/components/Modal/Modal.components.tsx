import React, { SyntheticEvent, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ModalSize } from '@/theme/layout'

import { Wrapper, Content, Cross } from './Modal.styles'
import { stateType } from '../../redux/store'
import { closeModal } from '../../redux/reducers/global.reducer'

export const Modal: React.FC = () => {
  const modal = useSelector((state: stateType) => state.global.modal)
  const ModalContent = modal?.ModalContent || Fragment
  const size = modal?.size || ModalSize.SMALL
  const dispatch = useDispatch()
  const onClose = () => {
    dispatch(closeModal())
  }

  const stopPropogation = (e: SyntheticEvent) => {
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
