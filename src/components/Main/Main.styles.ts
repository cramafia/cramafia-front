import styled from 'styled-components'
import NextImage from 'next/image'
import { Button } from 'react-bootstrap'

import { getColor, Color } from '@/theme/color'
import { getTypography, Typography } from '@/theme/typography'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import {
  getNormilizeComponentAsStyle,
  NormilizeComponents,
} from '@/theme/normilize'
import { PositionProps } from './Main.types'

export const MainContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
  display: flex;
  flex-direction: column;
  > div:first-child {
    width: 50%;
  }
`

export const Slogan = styled.div`
  ${getTypography(Typography.HEADING_1)}
  color: ${getColor(Color.RED_500)};
`

export const Heading = styled.div`
  ${getTypography(Typography.HEADING_2)}
  text-align: ${({ align }: PositionProps) => align || 'flex-start'};
`

export const SubHeading = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getTypography(Typography.SUB_HEADING_1)};
  opacity: 0.8;
  text-align: ${({ align }: PositionProps) => align || 'flex-start'};
`

export const Action = styled(Button)`
  ${getNormilizeComponentAsStyle(NormilizeComponents.BUTTON)}
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  ${getTypography(Typography.BODY_REGULAR)}
  display: flex;
  align-self: ${({ align }: PositionProps) => align || 'flex-start'};
  border: 1px solid ${getColor(Color.RED_100)};
  border-radius: ${getUnitAsPixels()};
  background: ${getColor(Color.RED_100)};
  padding: ${getUnitAsPixels(3)} ${getUnitAsPixels(3)};
  :hover {
    border: 1px solid ${getColor(Color.RED_100)};
    background: inherit;
    color: ${getColor(Color.RED_100)};
  }
`

export const Spacer = styled.div`
  padding-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
`

export const Processes = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Process = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    width: 100%;
    margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  }
`

export const ProcessHeading = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getTypography(Typography.BODY_REGULAR)}
`

export const ProcessSubHeading = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  opacity: 0.8;
  ${getTypography(Typography.BODY_SMALL)}
`

export const Image = styled(NextImage)``
