import { Dispatch } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { LobbiesEventName } from '../types'
import { setAllLobbies } from 'src/redux/reducers/lobbies.reducer'

export const lobbiesHandlers = (socket: Socket, dispatch: Dispatch) => {
  socket.on(LobbiesEventName.GET_ALL_LOBBIES, (lobbies) => {
    dispatch(setAllLobbies(lobbies))
  })
}
