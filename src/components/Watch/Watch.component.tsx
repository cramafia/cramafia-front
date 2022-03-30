import React from 'react'
import {
  WatchContainer,
  MainText,
  GamesContainer,
  SubText,
} from './Watch.styles'
import { LobbiesTable } from '../LobbiesTable'

export const Watch: React.FC = () => {
  return (
    <WatchContainer>
      <MainText>Игры Live</MainText>
      <SubText>Текущие игры</SubText>
      <GamesContainer>
        <LobbiesTable />
      </GamesContainer>
    </WatchContainer>
  )
}
