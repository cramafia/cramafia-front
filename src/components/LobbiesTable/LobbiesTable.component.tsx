import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { TableContainer } from './LobbiesTable.styles'
import { getAllLobbies } from '../Socket/emitters/lobbies.emitters'
import { useSocketEmitters } from '@/hooks/useSocketEmitters'
import { useSelector } from 'react-redux'
import { stateType } from 'src/redux/store'

export const LobbiesTable = () => {
  const { allLobbies } = useSelector((state: stateType) => state.lobbies)
  const { emit } = useSocketEmitters()
  const router = useRouter()
  const linkTo = (lobbyId: string) => {
    router.push(`/lobby/${lobbyId}`)
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
          allLobbies.map(({ lobbyId }) => (
            <tr onClick={linkTo.bind(this, lobbyId)}>
              <th>{lobbyId}</th>
              <th>сос</th>
            </tr>
          ))}
      </tbody>
    </TableContainer>
  )
}
