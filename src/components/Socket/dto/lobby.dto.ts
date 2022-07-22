import {
  LobbyGameType,
  LobbyGamePrivacy,
  LobbyGameStatus,
} from '@/types/lobby.types'

export interface CreateLobbyDto {
  lobbyId: string
  type: LobbyGameType
  name: string
  maxPlayers: number
  privacy: LobbyGamePrivacy
}

export interface ResponseLobbyDto extends CreateLobbyDto {
  status: LobbyGameStatus
  players: number
}
