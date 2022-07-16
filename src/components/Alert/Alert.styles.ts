import styled from 'styled-components'
import { Alert } from 'react-bootstrap'

import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { AlertType, getAlertVariant } from './Alert.types'

export const AlertContainer = styled.div`
  width: ${getUnitAsPixels(35)};
  position: fixed;
  right: ${getUnitAsPixels()};
  top: ${getUnitAsPixels()};
  z-index: 10;
`

export const AlertComponent = styled(Alert)`
  border: none;
  background-color: ${({ variant }: { variant: AlertType }) =>
    getAlertVariant(variant)};
`

export const AlertComponentHeading = styled(AlertComponent.Heading)`
  ${getTypography(Typography.BODY_SMALL)}
`

export const AlertText = styled.span``
