import { Socket } from 'socket.io-client'

import { CreateLobbyDto } from '../dto/lobby.dto'
import { LobbiesEventName } from '../types'

const getAllLobbies = (socket: Socket): void => {
  socket.emit(LobbiesEventName.GET_ALL_LOBBIES)
}

const createLobby = (socket: Socket, data: CreateLobbyDto): void => {
  socket.emit(LobbiesEventName.CREATE_LOBBY, data)
}

export { getAllLobbies, createLobby }
