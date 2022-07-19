import React, { ChangeEvent } from 'react'

import { SubText } from '../../CreateLobby.styles'

import {
  CreateGameContainer,
  CreateGameButton,
  GameNameInput,
  MinText,
  ErrorText,
} from './CreateGame.styles'
import { CreateGameProps } from './CreateGame.types'

export const CreateGame: React.FC<CreateGameProps> = ({
  gameType,
  gameName,
  changeName,
  errorText,
  onCreate,
}) => {
  return (
    <CreateGameContainer>
      <SubText>Тип игры: {gameType.text}</SubText>
      <SubText>Название лобби: {gameName}</SubText>
      <MinText>{gameType.additionalText}</MinText>
      <GameNameInput
        placeholder="Название игры"
        type="text"
        value={gameName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeName(e.target.value)
        }
        errorText={errorText}
      />
      <ErrorText>{errorText}</ErrorText>
      <CreateGameButton onClick={onCreate}>Создать игру</CreateGameButton>
    </CreateGameContainer>
  )
}
