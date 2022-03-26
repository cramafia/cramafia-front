import styled from 'styled-components'
import {
  getUnitAsPixels,
  getModalSizeAsPixels,
  ModalSize,
} from '../../theme/layout'
import { getColor, Color } from '../../theme/color'
import CrossIcon from '../../assets/icons/cross.svg'
import { useSelector } from 'react-redux'

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
`

export const Content = styled.div`
  position: fixed;
  border-radius: ${getUnitAsPixels()};
  width: ${({ size }: { size: ModalSize }) => getModalSizeAsPixels(size)};
  padding: ${getUnitAsPixels(4)} ${getUnitAsPixels(4)};
  background: ${getColor(Color.DARK_BLUE_500)};
`

export const Cross = styled(CrossIcon)`
  position: absolute;
  right: ${getUnitAsPixels(2)};
  top: ${getUnitAsPixels(2)};
  width: ${getUnitAsPixels(3)};
  height: ${getUnitAsPixels(3)};
  cursor: pointer;
  path {
    stroke: ${getColor(Color.GRAY_100)};
  }
  :hover {
    path {
      stroke: ${getColor(Color.WHITE)};
    }
  }
`
