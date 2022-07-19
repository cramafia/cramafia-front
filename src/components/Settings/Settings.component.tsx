import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from 'src/redux/store'

import { getIcon, IconType } from '../Icon'

import { SettingsBar, CloseButton, Container } from './Settings.styles'

import { toggleSettingsState } from '@/reducers/global.reducer'

export const Settings: React.FC = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: StateType) => state.global.showSettings)
  const handleCloseSettings = (): void => {
    dispatch(toggleSettingsState(false))
  }

  return (
    <Container onClick={handleCloseSettings} isVisible={isVisible}>
      <SettingsBar onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleCloseSettings}>
          {getIcon(IconType.CROSS)()}
        </CloseButton>
      </SettingsBar>
    </Container>
  )
}
