import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalPayloadType } from '../../types'
import { ModalSize } from '../../theme/layout'
import { getTheme, Theme, ThemeType } from '../../theme/color'

type initialStateType = {
  modal: ModalPayloadType | null
  theme: Theme
}

const initialState: initialStateType = {
  modal: null,
  theme: Theme.BLACK,
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

    switchTheme(state) {
      console.log(state.theme)
      return {
        ...state,
        theme: state.theme == 'BLACK' ? Theme.WHITE : Theme.BLACK,
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

export const { openModal, closeModal, switchTheme } = globalReducer.actions
export default globalReducer.reducer
