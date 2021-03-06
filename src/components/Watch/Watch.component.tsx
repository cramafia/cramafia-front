import React from 'react'
import {
  WatchContainer,
  MainText,
  GamesContainer,
  SubText,
  StreamsContainer,
} from './Watch.styles'

import { Streams } from './components/Streams'
import { LobbiesTable } from '../LobbiesTable'

export const Watch: React.FC = () => {
  return (
    <WatchContainer>
      <MainText>Игры Live</MainText>
      <StreamsContainer>
        <Streams />
      </StreamsContainer>
      <SubText>Текущие игры</SubText>
      <GamesContainer>
        <LobbiesTable />
      </GamesContainer>
    </WatchContainer>
  )
}
