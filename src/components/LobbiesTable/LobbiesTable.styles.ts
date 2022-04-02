import styled from 'styled-components'
import { Table } from 'react-bootstrap'

import { getColor, Color, ThemeType } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const TableContainer = styled(Table)`
  padding: ${getUnitAsPixels(3)};
  ${getTypography(Typography.NAVIGATION)}
  text-align: center;
  th {
    padding: ${getUnitAsPixels(3)};
  }
  tbody {
    cursor: pointer;
    border-radius: ${getUnitAsPixels()};
    box-shadow: 0 0 0 ${getUnitAsPixels()}
      ${({ theme }: { theme: ThemeType }) =>
        theme.background.primary === getColor(Color.BLACK)
          ? getColor(Color.DARK_LIGHT_500)
          : getColor(Color.GRAY_100)};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_LIGHT_500)
        : getColor(Color.GRAY_100)};
    span {
      border-bottom: 1px solid
        ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    }
    tr {
      &:hover {
        background-color: ${getColor(Color.GREEN_100)};
        box-shadow: 0 0 0 ${getUnitAsPixels()} ${getColor(Color.GREEN_100)};
        border-radius: ${getUnitAsPixels()};
      }
    }
  }
`
