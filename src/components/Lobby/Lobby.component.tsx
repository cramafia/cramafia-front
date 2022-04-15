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
  SubText,
  MinText,
  CreateGameButton,
} from './Lobby.styles'
import { Option } from './components/Option'
import { SubOption } from './components/SubOption'

export const Lobby: React.FC = () => {
  const options = [
    {
      text: ' Классика',
      type: 'classic',
      canEdit: [],
      additionalText: 'Играйте по классическим правилам',
    },
    {
      text: ' Кастомная',
      type: 'custom',
      canEdit: ['everyNight', 'allNominated', 'doctor'],
      additionalText: 'Играйте по кастомным правилам',
    },
  ]
  const [currentGameType, setCurrentGameType] = useState(options[0])

  const subOptions = [
    {
      id: 'everyNight',
      text: 'Мафия просыпается каждую ночь',
    },
    {
      id: 'allNominated',
      text: 'Все кандидатуры выставлены',
    },
    {
      id: 'doctor',
      text: 'Доктор в игре',
    },
  ]
  const CreateGame = () => {
    return (
      <CreateGameContainer>
        <SubText>
          Тип игры:
          {currentGameType.text}
        </SubText>
        <MinText>{currentGameType.additionalText}</MinText>
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
              {options.map((option) => (
                <Option
                  text={option.text}
                  gameType={option.type}
                  currentGameType={currentGameType}
                  setCurrentGame={setCurrentGameType.bind(this, {
                    text: option.text,
                    type: option.type,
                    canEdit: option.canEdit,
                    additionalText: option.additionalText,
                  })}
                />
              ))}
            </GameTypeContainer>
            <AdvancedSettings>
              <SubText>Дополнительные параметры игры:</SubText>
              {subOptions.map((subOption) => (
                <SubOption
                  id={subOption.id}
                  text={subOption.text}
                  currentGameType={currentGameType}
                />
              ))}
            </AdvancedSettings>
          </GameSetting>
          <CreateGame />
        </GameSettingContainer>
      </NewGameContainer>
      <LobbiesTable />
    </>
  )
}
