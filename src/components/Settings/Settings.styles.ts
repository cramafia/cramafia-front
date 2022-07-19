import styled from 'styled-components'
import { getUnitAsPixels } from '@/theme/layout'
import { ThemeType } from '@/theme/color'
import { getColor, Color } from '@/theme/color'

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
