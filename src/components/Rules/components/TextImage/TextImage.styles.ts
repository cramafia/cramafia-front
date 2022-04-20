import styled from 'styled-components'

import { ImageFloat } from './TextImage.types'
import { getUnitAsPixels } from '@/theme/layout'

export const Container = styled.div`
  ${({ float }: { float: ImageFloat }) =>
    float === ImageFloat.NONE &&
    `
    display: flex;
    flex-direction: column;
    div: first-child {
      order: 1;
    }
  `}
`

export const ImageContainer = styled.div`
  float: ${({ float }: { float: ImageFloat }) => float};
  margin-right: ${({ float }: { float: ImageFloat }) =>
    float === ImageFloat.LEFT && getUnitAsPixels(3)};
  margin-left: ${({ float }: { float: ImageFloat }) =>
    float === ImageFloat.RIGHT && getUnitAsPixels(3)};
`
