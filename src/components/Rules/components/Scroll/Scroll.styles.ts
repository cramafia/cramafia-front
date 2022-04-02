import { getUnitAsPixels } from '@/theme/layout'
import styled from 'styled-components'

export const ScrollContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  left: 1%;
  top: 1%;
  cursor: pointer;
  opacity: ${({ active }: { active: boolean }) => (active ? 1 : 0)};
  span {
    margin-left: ${getUnitAsPixels()};
  }
`
