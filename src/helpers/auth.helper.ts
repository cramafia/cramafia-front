/* eslint-disable class-methods-use-this */
import jwt_decode from 'jwt-decode'
import { DateTime } from 'luxon'

import { AuthResponseDto } from '@/services/authApi/dto/authResponse.dto'
import { Tokens } from '@/types/api.types'

class AuthHelper {
  private get now(): number {
    return DateTime.now().toSeconds()
  }

  setTokensFromData(data: AuthResponseDto): void {
    localStorage.setItem(Tokens.AT, data[Tokens.AT])
    localStorage.setItem(Tokens.RT, data[Tokens.RT])
  }

  logout(): void {
    localStorage.removeItem(Tokens.AT)
    localStorage.removeItem(Tokens.RT)
  }

  getToken(type: Tokens): string {
    return localStorage.getItem(type) ?? ''
  }

  isExpired(type: Tokens): Record<string, boolean> {
    const exp = this.jwtDecodeExp(this.getToken(type))

    if (this.now > exp) {
      localStorage.removeItem(type)

      return { [type]: true }
    }

    return { [type]: false }
  }

  isExpiredBoth(): Record<Tokens, boolean> {
    return {
      ...(this.isExpired(Tokens.AT) as Record<Tokens.AT, boolean>),
      ...(this.isExpired(Tokens.RT) as Record<Tokens.RT, boolean>),
    }
  }

  private jwtDecodeExp(t: string): number {
    if (!t) return 0
    const { exp }: { exp: number } = jwt_decode(t)

    return exp
  }
}

export default new AuthHelper()
