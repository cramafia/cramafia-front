import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { LobbiesTable } from '../LobbiesTable'

import {
  GameSearchContainer,
  TableHeaderRow,
  TableHeaderCol,
  NewGame,
  ToLobbie,
  ToLobbieContainer,
  LivePlayers,
} from './GameSearch.styles'
import { Search } from './components/Search'

import { ButtonLink } from '@/components/ButtonLink'

export const GameSearch: React.FC = () => {
  const { activeUsers } = useSelector((state: StateType) => state.socket)

  return (
    <GameSearchContainer>
      <div>
        <LivePlayers>Игроков на сайте: {activeUsers}</LivePlayers>
        <Row>
          <Col md="6">
            <Search />
          </Col>
          <Col md="6" />
        </Row>
        <TableHeaderRow>
          <TableHeaderCol>Игры в лобби</TableHeaderCol>
          <TableHeaderCol>
            <ButtonLink href="/create-lobby">
              <NewGame>Новая игра +</NewGame>
            </ButtonLink>
          </TableHeaderCol>
        </TableHeaderRow>
        <LobbiesTable />
        <ToLobbieContainer>
          <ButtonLink href="/create-lobby">
            <ToLobbie>Перейти в лобби</ToLobbie>
          </ButtonLink>
        </ToLobbieContainer>
      </div>
    </GameSearchContainer>
  )
}
