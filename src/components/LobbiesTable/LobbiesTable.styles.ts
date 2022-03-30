import styled from 'styled-components'
import { Table } from 'react-bootstrap'

import { getColor, Color, ThemeType } from '@/theme/color'
import { getUnitAsPixels } from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const TableContainer = styled(Table)`
  background: ${getColor(Color.DARK_LIGHT_400)};
  padding: ${getUnitAsPixels(3)};
  ${getTypography(Typography.NAVIGATION)}
  text-align: center;
  thead {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_LIGHT_500)
        : getColor(Color.WHITE)};
  }
  tbody {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_LIGHT_400)
        : getColor(Color.WHITE)};
    color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.WHITE)
        : getColor(Color.GRAY_200)};
  }
  tr {
    border: 1px solid
      ${({ theme }: { theme: ThemeType }) =>
        theme.background.primary === getColor(Color.BLACK)
          ? getColor(Color.DARK_LIGHT_500)
          : getColor(Color.WHITE_300)};
  }
`
