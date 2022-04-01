import { getUnitAsPixels } from '@/theme/layout'
import styled from 'styled-components'

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  width: 5em;
  justify-content: space-between;
  top: ${getUnitAsPixels(12)};
  z-index: 99999;
  height: 1em;
  .disable {
    opacity: 0;
  }
  svg {
    margin-bottom: ${getUnitAsPixels(0.5)};
  }
`

export const ContentContainer = styled.div`
  position: absolute;
  left: -400%;
  top: -400%;
  cursor: pointer;
`
