import React from 'react'

import { LobbiesTable } from '../LobbiesTable'
import {
  GameSearchContainer,
  TableHeaderRow,
  TableHeaderCol,
  NewGame,
  ToLobbie,
  ToLobbieContainer,
} from './GameSearch.styles'
import { ButtonLink } from '../ButtonLink'
import { Search } from './components/Search'
import { Row, Col } from 'react-bootstrap'

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
            <ButtonLink href="/watch">
              <NewGame>Новая игра +</NewGame>
            </ButtonLink>
          </TableHeaderCol>
        </TableHeaderRow>
        <LobbiesTable />
        <ToLobbieContainer>
          <ButtonLink href="/watch">
            <ToLobbie>Перейти в лобби</ToLobbie>
          </ButtonLink>
        </ToLobbieContainer>
      </div>
    </GameSearchContainer>
  )
}
