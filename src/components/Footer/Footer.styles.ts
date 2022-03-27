import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Color, getColor, ThemeType } from '../../theme/color'
import {
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  VerticalSpacingType,
} from '../../theme/layout'
import { getTypography, Typography } from '../../theme/typography'

export const FooterContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
  display: flex;
  flex-direction: column;
`

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  li {
    margin-bottom: 0;
  }
`

export const FeedBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`

export const List = styled.ul``

export const ListItem = styled.li`
  cursor: pointer;
  ${getTypography(Typography.NAVIGATION)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  :hover {
    opacity: 0.8;
  }
`

export const ListHeader = styled.li`
  color: ${getColor(Color.GRAY_200)};
  ${getTypography(Typography.BODY_SMALL)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const Email = styled.span`
  color: ${getColor(Color.GRAY_400)};
  :hover {
    color: ${getColor(Color.WHITE)};
    cursor: pointer;
  }
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getTypography(Typography.NAVIGATION)}
`

export const MessageButton = styled(Button)`
  background: ${({ theme }: { theme: ThemeType }) => theme.background.opposite};
  color: ${({ theme }: { theme: ThemeType }) => theme.color.opposite};
  padding: ${getUnitAsPixels(2)} ${getUnitAsPixels(5)};
  border-radius: ${getUnitAsPixels()};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  ${getTypography(Typography.BODY_SMALL)}
  font-weight: 550;
  :hover {
    background: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    border-color: ${getColor(Color.WHITE)};
  }
`

export const CheckButton = styled(Button)`
  ${getTypography(Typography.BODY_SMALL)}
  padding: ${getUnitAsPixels(2)} ${getUnitAsPixels(5)};
  border-radius: ${getUnitAsPixels()};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  background: ${({ theme }: { theme: ThemeType }) => theme.background.primary};
  color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  font-weight: 550;
  :hover,
  :focus {
    border-color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.background.primary};
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;

  svg {
    width: ${getUnitAsPixels(4)};
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
  path {
    fill: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
  }
`
