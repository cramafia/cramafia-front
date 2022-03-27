import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalPayloadType } from '../../types'
import { ModalSize } from '../../theme/layout'

type initialStateType = {
  modal: ModalPayloadType | null
}

const initialState: initialStateType = {
  modal: null,
}

const globalReducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalPayloadType>) {
      return {
        ...state,
        modal: {
          ModalContent: action.payload.ModalContent,
          size: action.payload.size || ModalSize.SMALL,
        },
      }
    },
    closeModal(state) {
      return {
        ...state,
        modal: null,
      }
    },
  },
})

export const { openModal, closeModal } = globalReducer.actions
export default globalReducer.reducer
