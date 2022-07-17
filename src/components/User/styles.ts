import { getColor, Color } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import styled from 'styled-components'

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: ${getUnitAsPixels()};
  background-color: ${getColor(Color.DARK_LIGHT_500)};
  align-items: center;
  padding: ${getUnitAsPixels(3)};
  margin-top: ${getUnitAsPixels(3)};
`

export const UserImage = styled.img`
  width: ${getUnitAsPixels(8)};
  height: ${getUnitAsPixels(8)};
  border-radius: ${getUnitAsPixels()};
  cursor: pointer;
`

export const UserName = styled.div`
  ${getTypography(Typography.BODY_REGULAR)}
  margin-left: ${getUnitAsPixels(3)};
`

export const Title = styled.span`
  ${getTypography(Typography.HEADING_3)}
`
