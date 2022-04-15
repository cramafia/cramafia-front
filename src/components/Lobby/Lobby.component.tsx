import React, { MouseEvent, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

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
import { OptionGameType, OptionType, SubOptionType } from './Lobby.types'
import {
  SubOptionId,
  getAllSubOptionsIds,
  getAllSubOptions,
  getAllOptions,
  getOption,
} from './Lobby.types'

export const Lobby: React.FC = () => {
  const [currentGameType, setCurrentGameType] = useState(
    getOption(OptionGameType.CLASSIC)
  )

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
              {getAllOptions().map((option) => (
                <Option
                  key={nanoid()}
                  text={option.text}
                  gameType={option.type}
                  currentGameType={currentGameType}
                  setCurrentGame={setCurrentGameType.bind(this, option)}
                />
              ))}
            </GameTypeContainer>
            <AdvancedSettings>
              <SubText>Дополнительные параметры игры:</SubText>
              {getAllSubOptions().map((subOption: SubOptionType) => (
                <SubOption
                  key={nanoid()}
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
