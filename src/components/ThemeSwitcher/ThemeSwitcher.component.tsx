import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchTheme } from 'src/redux/reducers/global.reducer'
import { StateType } from 'src/redux/store'

import {
  ThemeSwitcherContainer,
  Toggler,
  SwitchContainer,
  SwitchItem,
  SwitchHidden,
} from './ThemeSwitcher.styles'

import { Theme } from '@/theme/color'

export const ThemeSwitcher: React.FC = () => {
  const theme: Theme = useSelector((state: StateType) => state.global.theme)
  const checked = useMemo(() => theme === Theme.BLACK, [theme])
  const dispatch = useDispatch()
  const switchThemeHandler = (): void => {
    dispatch(switchTheme())
  }

  return (
    <ThemeSwitcherContainer>
      <Toggler>
        <SwitchContainer className="switch" checked={checked}>
          <SwitchHidden id="toggle" type="checkbox" />
          <SwitchItem className="slider" onClick={switchThemeHandler} />
        </SwitchContainer>
      </Toggler>
    </ThemeSwitcherContainer>
  )
}
