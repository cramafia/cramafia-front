import styled from 'styled-components'
import type { CenteredContainerProps } from './types'

export const CenteredContainer = styled.div`
  display: flex;
  align-items: ${({ align = 'initial' }: CenteredContainerProps) => align};
  justify-content: ${({ justify = 'initial' }: CenteredContainerProps) =>
    justify};
`
