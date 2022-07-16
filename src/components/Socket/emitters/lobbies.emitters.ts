import { Socket } from 'socket.io-client'
import { LobbiesEventName } from '../types'
import { LobbyDto } from '../dto/lobby.dto'

const getAllLobbies = (socket: Socket) => {
  socket.emit(LobbiesEventName.GET_ALL_LOBBIES)
}

const createLobby = (socket: Socket, data: LobbyDto) => {
  socket.emit(LobbiesEventName.CREATE_LOBBY, data)
}

export { getAllLobbies, createLobby }
