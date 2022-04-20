import { Button } from 'react-bootstrap'
import styled from 'styled-components'

import { Color, getColor, ThemeType } from '@/theme/color'
import {
  getMediaQuery,
  getUnitAsPixels,
  getVerticalSpacingAsPixels,
  ScreenSize,
  VerticalSpacingType,
} from '@/theme/layout'
import { getTypography, Typography } from '@/theme/typography'

export const FooterContainer = styled.div`
  margin-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.LARGE)};
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary};
`

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  padding-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};

  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    flex-direction: column;
    width: 100%;
  }
  span {
    :first-child {
      ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
        display: none;
      }
    }
  }
`

export const List = styled.ul`
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ListItem = styled.li`
  cursor: pointer;
  ${getTypography(Typography.NAVIGATION)}
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
  :hover {
    opacity: 0.8;
  }
`

export const ListHeader = styled.li`
  ${getTypography(Typography.BODY_SMALL)}
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.background.primary === getColor(Color.BLACK)
      ? getColor(Color.GRAY_200)
      : getColor(Color.BLACK)};
  margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.SMALL)};
`

export const FeedBackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.MEDIUM)} {
    width: 100%;
  }
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
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    flex-direction: column;
  }
`

export const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    width: 100%;
    margin-bottom: ${getVerticalSpacingAsPixels(VerticalSpacingType.MEDIUM)};
  }
`

export const Email = styled.span`
  color: ${getColor(Color.GRAY_400)};
  :hover {
    color: ${({ theme }: { theme: ThemeType }) => theme.color.primary};
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
  flex-wrap: wrap;

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
  ${getMediaQuery(ScreenSize.LARGE, ScreenSize.XLARGE)} {
    svg {
      width: ${getUnitAsPixels(3)};
    }
  }
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    width: 100%;
    svg {
      width: ${getUnitAsPixels(5)};
    }
  }
`
