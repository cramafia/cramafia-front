import React from 'react'

import { LobbyProps } from './Lobby.types'
import { Container } from './Lobby.styles'

export const Lobby = ({ children }: LobbyProps) => {
  return <Container>{children}</Container>
}
