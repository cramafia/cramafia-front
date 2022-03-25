import { ReactNode } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalPayloadType } from '../../components/Modal'
import { getModal } from '../../components/Modals'

type initialStateType = {
  modal: {
    ModalContent: ReactNode
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
      }
    },
    closeModal(state) {
      state.modal = null
    },
  },
})

export const { openModal, closeModal } = globalReducer.actions
export default globalReducer.reducer
