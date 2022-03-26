import { pixelate } from './helpers'

export enum ScreenSize {
  MOBAIL = 'MOBAIL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  MAX = 'MAX',
}

export enum VerticalSpacingType {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export enum ModalSize {
  MOBAIL = 'MOBAIL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export const unit: number = 8

export const getMediaQuery = (size: ScreenSize): string => {
  return `@media screen and (min-width: ${pixelate(breakpoints[size])})`
}

export const getUnitAsPixels = (multiplier: number = 1): string => {
  return pixelate(unit * multiplier)
}

export const getModalSizeAsPixels = (t: ModalSize): string => {
  return pixelate(modalSizes[t])
}

export const getVerticalSpacingAsPixels = (
  type: VerticalSpacingType
): string => {
  return pixelate(verticalSpacing[type])
}

const breakpoints: { [key in ScreenSize]: number } = {
  [ScreenSize.MOBAIL]: 0,
  [ScreenSize.SMALL]: 540,
  [ScreenSize.MEDIUM]: 768,
  [ScreenSize.LARGE]: 1024,
  [ScreenSize.XLARGE]: 1400,
  [ScreenSize.MAX]: 2000,
}

const verticalSpacing: { [key in VerticalSpacingType]: number } = {
  [ScreenSize.SMALL]: 24,
  [ScreenSize.MEDIUM]: 48,
  [ScreenSize.LARGE]: 96,
  [ScreenSize.XLARGE]: 192,
}

const modalSizes: { [key in ModalSize]: number } = {
  [ModalSize.MOBAIL]: 300,
  [ModalSize.SMALL]: 500,
  [ModalSize.MEDIUM]: 700,
  [ModalSize.LARGE]: 900,
  [ModalSize.XLARGE]: 1100,
}
