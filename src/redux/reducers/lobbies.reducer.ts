import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LobbyDto } from '@/components/Socket/dto/lobby.dto'

type initialStateType = {
  allLobbies: LobbyDto[]
}

const initialState: initialStateType = {
  allLobbies: [],
}

const socketReducer = createSlice({
  name: 'lobbies',
  initialState,
  reducers: {
    setAllLobbies(state, action: PayloadAction<LobbyDto[]>) {
      return {
        ...state,
        allLobbies: action.payload,
      }
    },
  },
})

export const { setAllLobbies } = socketReducer.actions

export default socketReducer.reducer
