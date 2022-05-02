import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  activeUsers: number
  a: null | string
}

const initialState: initialStateType = {
  activeUsers: 0,
  a: null,
}

const socketReducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setActiveUsers(state, action: PayloadAction<number>) {
      return {
        ...state,
        activeUsers: action.payload,
      }
    },
    getState(state) {
      return {
        ...state,
        a: 's',
      }
    },
  },
})

export const { setActiveUsers, getState } = socketReducer.actions

export default socketReducer.reducer
