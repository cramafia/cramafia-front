import styled from 'styled-components'

import { ThemeType, getColor, Color } from '@/theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const Container = styled.div<{ isVisible: boolean }>`
  top: ${({ isVisible }) => (isVisible ? '0' : '-100vh')};
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100vh;
`

export const SettingsBar = styled.div`
  position: relative;
  width: 80%;
  height: 80vh;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary};
  box-shadow: 0px 0px 50px -10px ${({ theme }: { theme: ThemeType }) => theme.color.settingsShadow};
  border-radius: ${getUnitAsPixels()};
  padding: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const CloseButton = styled.div`
  path {
    stroke: ${({ theme }: { theme: ThemeType }) => theme.color.settingsShadow};
  }
  svg {
    width: ${getUnitAsPixels(4)};
    height: ${getUnitAsPixels(4)};
  }
  position: absolute;
  right: ${getUnitAsPixels()};
  top: ${getUnitAsPixels()};
  :hover {
    path {
      stroke: ${getColor(Color.GRAY_200)};
    }
  }
  cursor: pointer;
`

export const Title = styled.span`
  ${getTypography(Typography.HEADING_2)};
`

export const SettingsContainer = styled.div`
  border-right: 10px solid
    ${({ theme }: { theme: ThemeType }) => theme.color.border};
  height: 100%;
  width: 30%;
`

export const SettingTitle = styled.div`
  ${getTypography(Typography.BODY_REGULAR)}
`
