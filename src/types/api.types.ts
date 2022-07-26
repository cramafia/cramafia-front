export enum Tokens {
  AT = 'access_token',
  RT = 'refresh_token',
}

export interface TokensDTO {
  access_token: string
  refresh_token: string
}

export interface Error {
  status: number
  data?: {
    message: string
  }
}
