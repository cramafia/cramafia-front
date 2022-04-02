import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'
import { Alert } from 'react-bootstrap'
import styled from 'styled-components'
import { AlertType, getAlertVariant } from './Alert.types'

export const AlertContainer = styled.div`
  width: ${getUnitAsPixels(35)};
  position: fixed;
  right: ${getUnitAsPixels()};
  top: ${getUnitAsPixels()};
  z-index: 9999;
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
