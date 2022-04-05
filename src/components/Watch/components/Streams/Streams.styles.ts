import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import styled from 'styled-components'

export const Stream = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getUnitAsPixels(30)};
  height: ${getUnitAsPixels(20)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
  margin-right: ${getUnitAsPixels(5)};

`

export const StreamIcon = styled.img`
  width: ${getUnitAsPixels(30)};
  height: ${getUnitAsPixels(15)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
  border-radius: ${getUnitAsPixels()};
  cursor: pointer;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`
export const StreamInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: ${getUnitAsPixels()};
  cursor: pointer;
`

export const UserIcon = styled.img`
  width: ${getUnitAsPixels(5)};
  height: ${getUnitAsPixels(5)};
  border-radius: ${getUnitAsPixels(3)};
`

export const UserName = styled.span`
  ${getTypography(Typography.BODY_MIN)}
  :hover {
    color: getColor(Color.GRAY_200);
  }
`

export const StreamName = styled.span``
