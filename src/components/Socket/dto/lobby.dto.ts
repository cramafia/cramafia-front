import {
  LobbyGameType,
  LobbyGamePrivacy,
  LobbyGameStatus,
} from '@/types/lobby.types'

export interface CreateLobbyDto {
  lobbyId: string
  type: LobbyGameType
  name: string
  privacy: LobbyGamePrivacy
}

export interface ResponseLobbyDto extends CreateLobbyDto {
  status: LobbyGameStatus
  players: number
}
