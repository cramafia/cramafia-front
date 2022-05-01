import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'

import { AlertPayloadType, ModalPayloadType } from '../../types'
import { ModalSize } from '@/theme/layout'
import { Theme } from '@/theme/color'

type initialStateType = {
  modal: ModalPayloadType | null
  theme: Theme
  alert: AlertPayloadType | null
  isAuthorized: boolean
  socket: Socket | null
}

const initialState: initialStateType = {
  modal: null,
  theme: Theme.BLACK,
  alert: null,
  isAuthorized: false,
  socket: null,
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

    authorizeUser(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isAuthorized: action.payload,
      }
    },

    connectSocket(state, action: PayloadAction<Socket>) {
      return {
        ...state,
        socket: action.payload,
      }
    },
  },
})

export const {
  openModal,
  closeModal,
  addAlert,
  closeAlert,
  switchTheme,
  authorizeUser,
  connectSocket,
} = globalReducer.actions

export default globalReducer.reducer
