import styled from 'styled-components'

import { getUnitAsPixels } from '@/theme/layout'

export const AnchorObserver = styled.div`
  position: absolute;
  top: ${getUnitAsPixels(12.5)};
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
