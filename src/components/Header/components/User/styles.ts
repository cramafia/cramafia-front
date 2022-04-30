import styled from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '@/theme/layout'

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

export const UserInformation = styled(DropdownButton)`
  margin-left: ${getUnitAsPixels()};
  button: {
    color: black;
  }
`

export const Option = styled(Dropdown.Item)``
