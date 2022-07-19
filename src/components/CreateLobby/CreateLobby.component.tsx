import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { createLobby } from '../Socket/emitters/lobbies.emitters'

import {
  NewGameContainer,
  Title,
  GameSettingContainer,
  GameSetting,
  GameTypeContainer,
  AdvancedSettings,
  SubText,
} from './CreateLobby.styles'
import {
  OptionGameType,
  SubOptionId,
  SubOptionType,
  getAllSubOptions,
  getAllOptions,
  getOption,
  LobbyStateType,
} from './CreateLobby.types'
import { CreateGame } from './components/CreateGame'
import { Option } from './components/Option'
import { SubOption } from './components/SubOption'

import { LobbiesTable } from '@/components/LobbiesTable'
import { useSocketEmitters } from '@/hooks/useSocketEmitters'
import { videosdkApi } from '@/services/videosdk/videosdk'

export const CreateLobby: React.FC = () => {
  const [lobbyState, setLobbyState] = useState<LobbyStateType>({
    gameType: getOption(OptionGameType.CLASSIC),
    activeSubOptions: [SubOptionId.PRIVATE],
    gameName: '',
    errorText: '',
  })

  const handleChangeOption = (option: OptionGameType): void => {
    setLobbyState({
      ...lobbyState,
      gameType: getOption(option),
      activeSubOptions: [],
    })
  }
  const [createMeetings, { data }] = videosdkApi.useCreateMeetingMutation<{
    data: {
      meetingId?: string
    }
  }>()
  const router = useRouter()
  const { emit } = useSocketEmitters()

  const onCreate = (): void => {
    createMeetings()
      .then(() => {})
      .catch(() => {})
  }

  useEffect(() => {
    if (data.meetingId) {
      emit(createLobby, {
        lobbyId: data.meetingId,
      })
      router
        .push(`/lobby/${data.meetingId}`)
        .then(() => {})
        .catch(() => {})
    }
  }, [data])

  const handleChangeActiveSubOptions = (
    id: SubOptionId,
    canEdit: boolean
  ): void => {
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

  const changeName = (value: string): void => {
    if (value.length > 16) {
      setLobbyState({
        ...lobbyState,
        errorText: 'Название должно быть меньше 16 символов',
      })
    } else {
      setLobbyState({ ...lobbyState, gameName: value, errorText: '' })
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
                  onClick={() => handleChangeOption(option.type)}
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
            onCreate={onCreate}
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
