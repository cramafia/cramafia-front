import React, { useState } from 'react'

import {
  Container,
  Title,
  SubTitle,
  PlayerButton,
  GameButton,
  Buttons,
  GroupCol,
  SearchButton,
} from './Search.styles'
import { Row, Col } from 'react-bootstrap'

export const Search = () => {
  const [playerType, togglePlayerType] = useState(false)
  const [gameType, toggleGameType] = useState(false)

  return (
    <Container>
      <Title>Поиск игр</Title>
      <SubTitle>Выберите параметры поиска игры</SubTitle>
      <Buttons>
        <Row>
          <GroupCol md="6">
            <Row>
              <Col>
                <PlayerButton
                  onClick={togglePlayerType.bind(this, false)}
                  active={!playerType}
                >
                  Игрок
                </PlayerButton>
              </Col>
              <Col>
                <PlayerButton
                  onClick={togglePlayerType.bind(this, true)}
                  active={playerType}
                >
                  Судья
                </PlayerButton>
              </Col>
            </Row>
          </GroupCol>
          <GroupCol md="6">
            <Row>
              <Col>
                <GameButton
                  onClick={toggleGameType.bind(this, false)}
                  active={!gameType}
                >
                  Классическая
                </GameButton>
              </Col>
              <Col>
                <GameButton
                  onClick={toggleGameType.bind(this, true)}
                  active={gameType}
                >
                  Кастомная
                </GameButton>
              </Col>
            </Row>
          </GroupCol>
        </Row>
      </Buttons>
      <SearchButton>Найти игру</SearchButton>
    </Container>
  )
}
