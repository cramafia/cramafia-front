import AuthHelper from '@/helpers/auth.helper'
import { AuthResponseDto } from '@/services/authApi/dto/authResponse.dto'
// eslint-disable-next-line import/no-cycle
import { ReturnBaseQuery } from '@/services/base.api'
import { Tokens } from '@/types/api.types'

export interface CbProps {
  url: string
  method: string
}

type Cb = ({ url, method }: CbProps) => Promise<ReturnBaseQuery>

export const authMiddleware = async (cb: Cb): Promise<void> => {
  const { [Tokens.AT]: isExpAT, [Tokens.RT]: isExpRT } =
    AuthHelper.isExpiredBoth()

  if (isExpAT && !isExpRT) {
    const { data } = await cb({
      url: `auth/refresh-token/${AuthHelper.getToken(Tokens.RT)}`,
      method: 'POST',
    })

    if (data) {
      AuthHelper.setTokensFromData(data as AuthResponseDto)
    }
  }

  if (isExpAT && isExpRT) {
    // TODO LOGOUT
  }
}
