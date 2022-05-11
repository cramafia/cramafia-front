import React from 'react'

import { SubText } from '../../CreateLobby.styles'
import {
  CreateGameContainer,
  CreateGameButton,
  GameNameInput,
  MinText,
  ErrorText,
} from './CreateGame.styles'
import { CreateGameProps } from './CreateGame.types'

export const CreateGame = ({
  gameType,
  gameName,
  changeName,
  errorText,
}: CreateGameProps) => {
  return (
    <CreateGameContainer>
      <SubText>Тип игры: {gameType.text}</SubText>
      <SubText>Название лобби: {gameName}</SubText>
      <MinText>{gameType.additionalText}</MinText>
      <GameNameInput
        placeholder="Название игры"
        type="text"
        value={gameName}
        onChange={changeName}
        errorText={errorText}
      />
      <ErrorText>{errorText}</ErrorText>
      <CreateGameButton>Создать игру</CreateGameButton>
    </CreateGameContainer>
  )
}
