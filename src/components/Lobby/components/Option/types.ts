import { MouseEventHandler } from 'react'
import { OptionType } from './../../Lobby.types'

export interface OptionProps {
  text: string
  currentGameType: OptionType
  onClick: MouseEventHandler
  gameType: string
}
