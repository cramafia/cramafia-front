import { ResponseUserDto } from '@/services/usersApi/dto/response-user.dto'

export interface ConnectPlayerDto {
  lobbyId: string
  player: ResponseUserDto
}

export interface DisconnectPlayerDto {
  lobbyId: string
  player: ResponseUserDto
}
