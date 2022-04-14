import React, { MouseEvent, useEffect, useState } from 'react'
import { getIcon, IconType } from '../Icon'

import { LobbiesTable } from '../LobbiesTable'
import {
  NewGameContainer,
  Title,
  GameSettingContainer,
  GameSetting,
  GameTypeContainer,
  AdvancedSettings,
  CreateGameContainer,
  IconContainer,
  OptionContainer,
  OptionText,
  SubText,
  MinText,
  CreateGameButton,
} from './Lobby.styles'

export const Lobby: React.FC = () => {
  const [currentGame, setCurrentGame] = useState('classic')
  const Option = ({
    text,
    gameType,
  }: {
    text: string
    gameType: string | null
  }) => {
    const [selected, setSelected] = useState(false)
    useEffect(() => {
      if (currentGame === gameType) setSelected(true)
    }, [])

    const onClick = (e: MouseEvent) => {
      gameType ? setCurrentGame(gameType) : ''
      if (currentGame != 'classic' && gameType === null) {
        setSelected(!selected)
      }
    }

    return (
      <OptionContainer
        selected={selected}
        onClick={onClick}
        gameType={gameType}
        currentGame={currentGame}
      >
        <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
        <OptionText selected={selected}>{text}</OptionText>
      </OptionContainer>
    )
  }

  const CreateGame = () => {
    return (
      <CreateGameContainer>
        <SubText>
          Тип игры: {currentGame === 'classic' ? 'Классический' : 'Кастомный'}
        </SubText>
        <MinText>
          {currentGame === 'classic'
            ? 'Играйте по стандартным правилам'
            : 'Играйте по кастомным правилам'}
        </MinText>
        <CreateGameButton>Создать игру</CreateGameButton>
      </CreateGameContainer>
    )
  }
  return (
    <>
      <NewGameContainer>
        <Title>Создание игры</Title>
        <GameSettingContainer>
          <GameSetting>
            <GameTypeContainer>
              <SubText>Тип игры:</SubText>
              <Option text="Классика" gameType="classic" />
              <Option text="Кастомная" gameType="custom" />
            </GameTypeContainer>
            <AdvancedSettings>
              <SubText>Дополнительные параметры игры:</SubText>
              <Option text="Все кандидатуры выставлены" gameType={null} />
              <Option text="Мафия просыпается каждую ночь" gameType={null} />
              <Option text="Доктор в игре" gameType={null} />
            </AdvancedSettings>
          </GameSetting>
          <CreateGame />
        </GameSettingContainer>
      </NewGameContainer>
      <LobbiesTable />
    </>
  )
}
