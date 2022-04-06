import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'styled-components'

import {
  ThemeSwitcherContainer,
  Toggler,
  SwitchContainer,
  SwitchItem,
  SwitchHidden,
} from './ThemeSwitcher.styles'
import { switchTheme } from 'src/redux/reducers/global.reducer'
import { stateType } from 'src/redux/store'
import { Theme } from '@/theme/color'

export const ThemeSwitcher: React.FC = () => {
  const theme: Theme = useSelector((state: stateType) => state.global.theme)
  const dispatch = useDispatch()
  const switchThemeHandler = () => {
    dispatch(switchTheme())
  }
  return (
    <ThemeSwitcherContainer>
      <Toggler>
        <SwitchContainer className="switch">
          <SwitchHidden
            id="toggle"
            type="checkbox"
            checked={theme === Theme.BLACK}
            readOnly
            value="true"
          />
          <SwitchItem
            className="slider"
            onClick={switchThemeHandler}
          ></SwitchItem>
        </SwitchContainer>
      </Toggler>
    </ThemeSwitcherContainer>
  )
}
