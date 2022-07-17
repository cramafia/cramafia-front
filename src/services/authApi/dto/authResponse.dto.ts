import { Tokens } from '@/types/api.types'

export interface AuthResponseDto {
  [Tokens.AT]: string
  [Tokens.RT]: string
}
