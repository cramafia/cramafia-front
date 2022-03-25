import React, { SyntheticEvent } from 'react'
import { Wrapper, Content, Cross } from './Modal.styles'
import { useSelector, useDispatch } from 'react-redux'
import { stateType } from '../../redux/store'
import { closeModal } from '../../redux/reducers/global.reducer'

export const Modal = () => {
  const modal = useSelector((state: stateType) => state.global.modal)
  const ModalContent = modal?.ModalContent
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
        <Content onClick={stopPropogation}>
          <Cross onClick={onClose} />
          <ModalContent />
        </Content>
      </Wrapper>
    )
  )
}
