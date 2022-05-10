import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  activeUsers: number
}

const initialState: initialStateType = {
  activeUsers: 0,
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
  },
})

export const { setActiveUsers } = socketReducer.actions

export default socketReducer.reducer
