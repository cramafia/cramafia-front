import React from 'react'
import {
  WatchContainer,
  MainText,
  GamesContainer,
  SubText,
  GamesTable,
} from './Watch.styles'

export const Watch: React.FC = () => {
  const games = {
    content: [
      {
        id: 111600,
        type: 'Лига',
        name: 'Gay Club',
        players: '11/11',
      },
      {
        id: 111598,
        type: 'Лобби',
        name: 'Ебёмся в жопу',
        players: '5/11',
      },
      {
        id: 111597,
        type: 'Лига',
        name: 'Masters',
        players: '9/11',
      },
    ],
  }

  return (
    <WatchContainer>
      <MainText>Игры Live</MainText>
      <SubText>Текущие игры</SubText>
      <GamesContainer>
        <GamesTable responsive="md" borderless size="xl">
          <thead>
            <tr>
              <th>id</th>
              <th>Тип игры</th>
              <th>Название</th>
              <th>Игроки</th>
            </tr>
          </thead>
          <tbody>
            {games.content.map(({ id, type, name, players }) => (
              <tr key={id}>
                <th>{id}</th>
                <th>{type}</th>
                <th>{name}</th>
                <th>{players}</th>
              </tr>
            ))}
          </tbody>
        </GamesTable>
      </GamesContainer>
    </WatchContainer>
  )
}
