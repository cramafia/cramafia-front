import { Color, getColor, ThemeType } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'

export const AlertContainer = styled.div`
  width: ${getUnitAsPixels(35)};
  position: fixed;
  right: ${getUnitAsPixels()};
  top: ${getUnitAsPixels()};
  z-index: 9999;
`

export const AlertComponent = styled(Alert)`
  border: none;
  background-color: ${({ variant }: { variant: string | undefined }) => {
    switch (variant) {
      case 'danger':
        return getColor(Color.RED_400)
      case 'success':
        return getColor(Color.GREEN_100)
    }
  }};
`

export const AlertText = styled.span``
