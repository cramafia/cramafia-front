import React from 'react'

import { TableContainer } from './LobbiesTable.styles'
import lobbies from '@/constants/lobbies.json'

export const LobbiesTable = () => {
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
        {lobbies.content.map(({ id, type, name, players, status }) => (
          <tr key={id}>
            <th>{id}</th>
            <th>{name}</th>
            <th>{type}</th>
            <th>{status}</th>
            <th>
              <span>{players}</span>
            </th>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}
