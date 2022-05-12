import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useFormik } from 'formik'

import { LobbiesTable } from '@/components/LobbiesTable'

import {
  NewGameContainer,
  Title,
  GameSettingContainer,
  GameSetting,
  GameTypeContainer,
  AdvancedSettings,
  SubText,
} from './CreateLobby.styles'
import { Option } from './components/Option'
import { SubOption } from './components/SubOption'
import { CreateGame } from './components/CreateGame'

import {
  OptionGameType,
  SubOptionId,
  SubOptionType,
  getAllSubOptions,
  getAllOptions,
  getOption,
  LobbyStateType,
} from './CreateLobby.types'

export const CreateLobby: React.FC = () => {
  const [lobbyState, setLobbyState] = useState<LobbyStateType>({
    gameType: getOption(OptionGameType.CLASSIC),
    activeSubOptions: [SubOptionId.PRIVATE],
    gameName: '',
    errorText: '',
  })

  const handleChangeOption = (option: OptionGameType) => {
    setLobbyState({
      ...lobbyState,
      gameType: getOption(option),
      activeSubOptions: [],
    })
  }

  const handleChangeActiveSubOptions = (id: SubOptionId, canEdit: boolean) => {
    if (canEdit) {
      if (lobbyState.activeSubOptions.includes(id)) {
        setLobbyState({
          ...lobbyState,
          activeSubOptions: lobbyState.activeSubOptions.filter(
            (_SubOptionId) => _SubOptionId !== id
          ),
        })
      } else {
        setLobbyState({
          ...lobbyState,
          activeSubOptions: [...lobbyState.activeSubOptions, id],
        })
      }
    }
  }

  const changeName = (e: any) => {
    if (e.target.value.length > 16) {
      setLobbyState({
        ...lobbyState,
        errorText: 'Название должно быть меньше 16 символов',
      })
    } else {
      setLobbyState({ ...lobbyState, gameName: e.target.value, errorText: '' })
    }
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
                  currentGameType={lobbyState.gameType}
                  onClick={handleChangeOption.bind(this, option.type)}
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
                  gameType={lobbyState.gameType}
                  activeSubOptions={lobbyState.activeSubOptions}
                  onClick={handleChangeActiveSubOptions}
                />
              ))}
            </AdvancedSettings>
          </GameSetting>
          <CreateGame
            gameType={lobbyState.gameType}
            gameName={lobbyState.gameName}
            changeName={changeName}
            errorText={lobbyState.errorText}
          />
        </GameSettingContainer>
      </NewGameContainer>
      <LobbiesTable />
    </>
  )
}
