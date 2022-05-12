import styled from 'styled-components'
import { Button, Form } from 'react-bootstrap'

import { getColor, Color, ThemeType } from '@/theme/color'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const NewGameContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding: ${getUnitAsPixels(5)};

  background-color: ${getColor(Color.DARK_LIGHT_400)};
  border-radius: ${getUnitAsPixels()};
`

export const Title = styled.span`
  ${getTypography(Typography.BODY_REGULAR)}
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const GameSettingContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    flex-direction: column;
  }
`

export const GameSetting = styled.div`
  display: flex;
  width: 60%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.XLARGE)} {
    width: 100%;
    border: none;
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    flex-direction: column;
    align-items: center;
  }
`

export const GameTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    width: 100%;
  }
`

export const AdvancedSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    margin-left: 0;
    width: 100%;
  }
`

export const SubText = styled.span`
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  margin-right: ${getUnitAsPixels()};
`
