import React from 'react'

import { LobbiesTable } from '../LobbiesTable'
import { GameSearchContainer, Row, Col, NewGame } from './GameSearch.styles'
import { ButtonLink } from '../ButtonLink'

export const GameSearch = () => {
  return (
    <GameSearchContainer>
      <div>
        <Row>
          <Col>Игры в лобби</Col>
          <Col>
            <ButtonLink href="/watch">
              <NewGame>Новая игра +</NewGame>
            </ButtonLink>
          </Col>
        </Row>
        <LobbiesTable />
        <div></div>
      </div>
    </GameSearchContainer>
  )
}
