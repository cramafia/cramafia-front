import { keyframes } from 'styled-components'

export const show = () => keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

export const scale = () => keyframes`
  0% { transform: scale(1)}
  100% { transform: scale(0)}
`
