import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertPayloadType, ModalPayloadType } from '../../types'
import { ModalSize } from '../../theme/layout'
import { Theme } from '../../theme/color'
import { AlertType } from '@/components/Alert/Alert.types'

type initialStateType = {
  modal: ModalPayloadType | null
  theme: Theme
  alert: AlertPayloadType | null
}

const initialState: initialStateType = {
  modal: null,
  theme: Theme.BLACK,
  alert: { type: AlertType.WARNING, title: 'ERROR', text: 'text' },
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

    addAlert(state, action: PayloadAction<AlertPayloadType>) {
      return {
        ...state,
        alert: action.payload,
      }
    },

    closeAlert(state) {
      return {
        ...state,
        alert: null,
      }
    },

    switchTheme(state) {
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

export const { openModal, closeModal, addAlert, closeAlert, switchTheme } =
  globalReducer.actions

export default globalReducer.reducer
