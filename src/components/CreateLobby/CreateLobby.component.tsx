import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { LobbiesTable } from '@/components/LobbiesTable'

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
} from './CreateLobby.styles'
import { Option } from './components/Option'
import { SubOption } from './components/SubOption'

import { OptionGameType, SubOptionType } from './CreateLobby.types'
import { getAllSubOptions, getAllOptions, getOption } from './CreateLobby.types'

export const CreateLobby: React.FC = () => {
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
                  onClick={setCurrentGameType.bind(this, option)}
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
