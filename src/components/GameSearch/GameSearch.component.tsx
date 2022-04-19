import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { LobbiesTable } from '../LobbiesTable'
import {
  GameSearchContainer,
  TableHeaderRow,
  TableHeaderCol,
  NewGame,
  ToLobbie,
  ToLobbieContainer,
} from './GameSearch.styles'
import { ButtonLink } from '@/components/ButtonLink'
import { Search } from './components/Search'

export const GameSearch = () => {
  return (
    <GameSearchContainer>
      <div>
        <Row>
          <Col md="6">
            <Search />
          </Col>
          <Col md="6"></Col>
        </Row>
        <TableHeaderRow>
          <TableHeaderCol>Игры в лобби</TableHeaderCol>
          <TableHeaderCol>
            <ButtonLink href="/lobby">
              <NewGame>Новая игра +</NewGame>
            </ButtonLink>
          </TableHeaderCol>
        </TableHeaderRow>
        <LobbiesTable />
        <ToLobbieContainer>
          <ButtonLink href="/lobby">
            <ToLobbie>Перейти в лобби</ToLobbie>
          </ButtonLink>
        </ToLobbieContainer>
      </div>
    </GameSearchContainer>
  )
}
