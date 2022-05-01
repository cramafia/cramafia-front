import jwt_decode from 'jwt-decode'
import { DateTime } from 'luxon'

import { Tokens } from '@/types/api.types'
import { AuthResponseDto } from '@/services/authApi/dto/authResponse.dto'

class AuthHelper {
  setTokensFromData(data: AuthResponseDto) {
    localStorage.setItem(Tokens.AT, data[Tokens.AT])
    localStorage.setItem(Tokens.RT, data[Tokens.RT])
  }

  getToken(type: Tokens) {
    return localStorage.getItem(type) || ''
  }

  isExpired(type: Tokens) {
    const exp = this.jwtDecodeExp(this.getToken(type))
    if (this.now > exp) {
      localStorage.removeItem(type)
      return { [type]: true }
    }
    return { [type]: false }
  }

  isExpiredBoth() {
    return {
      ...this.isExpired(Tokens.AT),
      ...this.isExpired(Tokens.RT),
    }
  }

  private jwtDecodeExp(t: string) {
    if (!t) return 0
    const { exp }: { exp: number } = jwt_decode(t)
    return exp
  }

  private get now() {
    return DateTime.now().toSeconds()
  }
}

export default new AuthHelper()
