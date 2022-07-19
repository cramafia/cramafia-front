import React from 'react'

import { Container } from './Lobby.styles'
import { LobbyProps } from './Lobby.types'

export const Lobby: React.FC<LobbyProps> = ({ children }) => {
  return <Container>{children}</Container>
}
