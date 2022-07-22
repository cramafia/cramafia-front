import { Socket } from 'socket.io-client'

import { ConnectPlayerDto, DisconnectPlayerDto } from '../dto/connection.dto'
import { CreateLobbyDto } from '../dto/lobby.dto'
import { LobbiesEventName } from '../types'

const getAllLobbies = (socket: Socket): void => {
  socket.emit(LobbiesEventName.GET_ALL_LOBBIES)
}

const createLobby = (socket: Socket, data: CreateLobbyDto): void => {
  socket.emit(LobbiesEventName.CREATE_LOBBY, data)
}

const connectPlayerToLobby = (socket: Socket, data: ConnectPlayerDto): void => {
  socket.emit(LobbiesEventName.CONNECT_PLAYER_TO_LOBBY, data)
}

const disconnectPlayerFromLobby = (
  socket: Socket,
  data: DisconnectPlayerDto
): void => {
  socket.emit(LobbiesEventName.DISCONNECT_PLAYER_FROM_LOBBY, data)
}

export {
  getAllLobbies,
  createLobby,
  connectPlayerToLobby,
  disconnectPlayerFromLobby,
}
