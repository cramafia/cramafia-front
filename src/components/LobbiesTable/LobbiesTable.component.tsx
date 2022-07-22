import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { ResponseLobbyDto } from '../Socket/dto/lobby.dto'
import { getAllLobbies } from '../Socket/emitters/lobbies.emitters'

import { TableContainer } from './LobbiesTable.styles'

import { useSocketEmitters } from '@/hooks/useSocketEmitters'

export const LobbiesTable: React.FC = () => {
  const { allLobbies } = useSelector((state: StateType) => state.lobbies)
  const { emit } = useSocketEmitters()
  const router = useRouter()
  const linkTo = (lobbyId: ResponseLobbyDto['lobbyId']): void => {
    router
      .push(`/lobby/${lobbyId}`)
      .then(() => {})
      .catch(() => {})
  }

  useEffect(() => {
    emit(getAllLobbies)
  }, [])

  return (
    <TableContainer responsive="md" borderless size="xl">
      <thead>
        <tr>
          <th>id</th>
          <th>Название</th>
          <th>Тип игры</th>
          <th>Статус</th>
          <th>Игроки</th>
        </tr>
      </thead>

      <tbody>
        {!!allLobbies.length &&
          allLobbies.map(
            ({
              lobbyId,
              name,
              type,
              status,
              players,
              maxPlayers,
            }: ResponseLobbyDto) => (
              <tr onClick={linkTo.bind(this, lobbyId)} key={lobbyId}>
                <th>{lobbyId}</th>
                <th>{name}</th>
                <th>{type}</th>
                <th>{status}</th>
                <th>{`${players}/${maxPlayers}`}</th>
              </tr>
            )
          )}
      </tbody>
    </TableContainer>
  )
}
