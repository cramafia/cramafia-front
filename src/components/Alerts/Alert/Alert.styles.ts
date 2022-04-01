import { getUnitAsPixels } from '@/theme/layout'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'

export const AlertContainer = styled.div`
  flex-direction: column;
  width: 30%;
  position: sticky;
  left: 68%;
  top: ${getUnitAsPixels(12)};
  z-index: 99999;
  height: 0px;
`

export const AlertComponent = styled(Alert)``

export const AlertText = styled.span``
