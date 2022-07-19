import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

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

export const Search: React.FC = () => {
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
                  onClick={() => togglePlayerType(false)}
                  active={!playerType}
                >
                  Игрок
                </PlayerButton>
              </Col>
              <Col>
                <PlayerButton
                  onClick={() => togglePlayerType(true)}
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
                  onClick={() => toggleGameType(false)}
                  active={!gameType}
                >
                  Классическая
                </GameButton>
              </Col>
              <Col>
                <GameButton
                  onClick={() => toggleGameType(true)}
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
