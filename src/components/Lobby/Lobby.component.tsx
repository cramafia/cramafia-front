import React, { useState } from 'react'
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
} from './Lobby.styles'

export const Lobby: React.FC = () => {
  const Option = ({ text }: { text: string }) => {
    const [selected, setSelected] = useState(false)
    const onSelect = () => {
      setSelected((prev) => (prev ? false : true))
    }

    return (
      <OptionContainer selected={selected} onClick={onSelect}>
        <IconContainer>{getIcon(IconType.CHECKED)()}</IconContainer>
        <OptionText>{text}</OptionText>
      </OptionContainer>
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
              <Option text="Новичок" />
              <Option text="Классика" />
              <Option text="Игра с Доктором" />
            </GameTypeContainer>
            <AdvancedSettings>
              <SubText>Дополнительные параметры игры:</SubText>
              <Option text="Все кандидатуры выставлены" />
              <Option text="Мафия просыпается каждую ночь" />
              <Option text="Доктор в игре" />
            </AdvancedSettings>
          </GameSetting>
          <CreateGameContainer>
            <SubText>Создать игру</SubText>
          </CreateGameContainer>
        </GameSettingContainer>
      </NewGameContainer>
      <LobbiesTable />
    </>
  )
}
