import React, { FunctionComponent } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalPayloadType } from '../../components/Modal'
import { getModal } from '../../components/Modals'
import { getModalSizeAsPixels, ModalSize } from '../../theme/layout'

type initialStateType = {
  modal: {
    ModalContent: React.FC
    size: ModalSize
  } | null
}

const initialState: initialStateType = {
  modal: null,
}

const globalReducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalPayloadType>) {
      state.modal = {
        ModalContent: getModal(action.payload.type),
        size: action.payload.size || ModalSize.SMALL,
      }
    },
    closeModal(state) {
      state.modal = null
    },
  },
})

export const { openModal, closeModal } = globalReducer.actions
export default globalReducer.reducer
