import styled from 'styled-components'
import { Dropdown, Spinner } from 'react-bootstrap'

import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'
import { Color, getColor, ThemeType } from '@/theme/color'
import { getTypography, Typography } from '@/theme/typography'

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserImage = styled.img`
  width: ${getUnitAsPixels(5)};
  height: ${getUnitAsPixels(5)};
  border-radius: ${getUnitAsPixels(3)};
  cursor: pointer;
`

export const UserInformation = styled(Dropdown)`
  ${getTypography(Typography.BODY_MIN)}
  margin-left: ${getUnitAsPixels()};
  .btn-primary.dropdown-toggle {
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
    border: none;
    box-shadow: none !important;
  }
  .dropdown-menu[data-bs-popper] {
    position: absolute;
    right: 0;
    left: auto;
    margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MIN)};
  }
`

export const UserName = styled(Dropdown.Toggle)`
  background-color: black;
  border: none;
  :hover,
  :focus,
  :active {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
    border: none;
    box-shadow: none;
  }
`

export const OptionsContainer = styled(Dropdown.Menu)`
  border-radius: ${getUnitAsPixels()};
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary === getColor(Color.BLACK)
      ? getColor(Color.DARK_LIGHT_300)
      : getColor(Color.WHITE_300)};
`

export const Option = styled(Dropdown.Item)`
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  :hover {
    color: ${getColor(Color.GRAY_200)};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary === getColor(Color.BLACK)
        ? getColor(Color.DARK_LIGHT_300)
        : getColor(Color.WHITE_300)};
  }
`

export const CustomSpinner = styled(Spinner)`
  color: ${({ theme }: { theme: ThemeType }) => theme.background.opposite};
`
