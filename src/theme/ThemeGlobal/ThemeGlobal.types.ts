import React from 'react'
import { ThemeType } from '../color'

export interface ThemeGlobalProps {
  children: React.FC
  theme: ThemeType
}
