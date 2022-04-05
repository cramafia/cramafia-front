import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import styled from 'styled-components'

export const Stream = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getUnitAsPixels(30)};
  height: ${getUnitAsPixels(20)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
`

export const StreamIcon = styled.img`
  width: ${getUnitAsPixels(30)};
  height: ${getUnitAsPixels(15)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const UserContainer = styled.div`
  display: flex;
`
export const StreamInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const UserIcon = styled.img`
  width: ${getUnitAsPixels(5)};
  height: ${getUnitAsPixels(5)};
  border-radius: 30px;
`

export const UserName = styled.span``

export const StreamName = styled.span``
