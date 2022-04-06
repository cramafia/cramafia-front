import { Color, getColor, ThemeType } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import styled, { css } from 'styled-components'

export const ThemeSwitcherContainer = styled.div``

export const Toggler = styled.div`
  width: ${getUnitAsPixels(7)};
  margin-left: ${getUnitAsPixels(4)};
`

export const SwitchItemMoon = css`
  background: ${getColor(Color.DARK_LIGHT_200)};
  box-shadow: inset -3px -2px 5px -2px ${getColor(Color.DARK_BLUE_500)},
    inset -10px -5px 0 0 ${getColor(Color.BLUE_200)};
  transform: translate(${getUnitAsPixels(3)}, 1px);
`

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  margin-bottom: 0.5rem;
  #toggle:checked ~ .slider:before {
    ${SwitchItemMoon}
  }
`

export const SwitchHidden = styled.input`
  opacity: 0;
  touch-action: none;
  width: 0;
  height: 0;
  overflow: visible;
`

export const SwitchItem = styled.span`
  position: absolute;
  top: 0;
  width: ${getUnitAsPixels(7)};
  height: ${getUnitAsPixels(3.75)};
  border-radius: ${getUnitAsPixels(2)};
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary === getColor(Color.BLACK)
      ? getColor(Color.DARK_LIGHT_200)
      : getColor(Color.WHITE_300)};
  cursor: pointer;
  transition: 0.6s;
  z-index: 99;
  :before {
    position: absolute;
    left: 3px;
    bottom: 3px;
    width: ${getUnitAsPixels(3)};
    height: ${getUnitAsPixels(3)};
    content: '';
    border-radius: 50%;
    background: linear-gradient(40deg, rgb(255, 0, 128), rgb(255, 140, 0) 70%);
    transition: 0.6s;
  }
`
