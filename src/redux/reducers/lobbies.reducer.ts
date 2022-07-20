import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ResponseLobbyDto } from '@/components/Socket/dto/lobby.dto'

interface InitialStateType {
  allLobbies: ResponseLobbyDto[]
}

const initialState: InitialStateType = {
  allLobbies: [],
}

const socketReducer = createSlice({
  name: 'lobbies',
  initialState,
  reducers: {
    setAllLobbies(state, action: PayloadAction<ResponseLobbyDto[]>) {
      return {
        ...state,
        allLobbies: action.payload,
      }
    },
  },
})

export const { setAllLobbies } = socketReducer.actions

export default socketReducer.reducer
