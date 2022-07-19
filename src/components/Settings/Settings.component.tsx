import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SettingsBar, CloseButton, Container } from './Settings.styles'
import { StateType } from '@/store'
import { useDispatch } from 'react-redux'
import { toggleSettingsState } from '@/reducers/global.reducer'
import { getIcon, IconType } from '../Icon'

export const Settings = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: StateType) => state.global.showSettings)
  const handleCloseSettings = () => {
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
