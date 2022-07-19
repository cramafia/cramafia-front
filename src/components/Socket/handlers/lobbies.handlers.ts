import { Dispatch } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { setAllLobbies } from 'src/redux/reducers/lobbies.reducer'

import { LobbyDto } from '../dto/lobby.dto'
import { LobbiesEventName } from '../types'

export const lobbiesHandlers = (socket: Socket, dispatch: Dispatch): void => {
  socket.on(LobbiesEventName.GET_ALL_LOBBIES, (lobbies: LobbyDto[]) => {
    dispatch(setAllLobbies(lobbies))
  })
}
