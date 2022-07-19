import { keyframes, Keyframes } from 'styled-components'

export const show = (): Keyframes => keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

export const scale = (): Keyframes => keyframes`
  0% { transform: scale(1)}
  100% { transform: scale(0)}
`
