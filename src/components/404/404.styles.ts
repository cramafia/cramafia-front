import styled from 'styled-components'

import { scale } from '@/theme/animation'
import { Color, getColor } from '@/theme/color'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: ${getUnitAsPixels(4)};
  background-image: url(//www.mantralabsglobal.com/wp-content/themes/spiral-child/images/error_404/white_grain.png),
    url(//www.mantralabsglobal.com/wp-content/themes/spiral-child/images/film_grain.png);
  background-color: ${getColor(Color.BLACK)};
  display: flex;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const TitleText = styled.div`
  ${getTypography(Typography.HEADING_3)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    flex-direction: column;
  }
`

export const AdditionalInformation = styled.div`
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.XLARGE)};
    order: -1;
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    text-align: center;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  }
`

export const NotFoundText = styled.span`
  ${getTypography(Typography._404)}
`

export const SubText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  color: ${getColor(Color.GRAY_200)};
`

export const TimeContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  ${getTypography(Typography.BODY_SMALL)}
  border-radius: ${getUnitAsPixels()};
  border: 1px solid ${getColor(Color.BLACK)};
  padding: ${getUnitAsPixels(2)};
  width: 50%;
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    width: 100%;
  }
`

export const HomePage = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  color: ${getColor(Color.GRAY_200)};
  text-decoration: underline;
  cursor: pointer;
`

export const IconContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${scale} linear 10s;
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    transform: scale(0.5);
  }
`

export const LogoContainer = styled.div`
  span {
    position: absolute;
  }
`
