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
  MIN = 'MIN',
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

export enum ImageSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
  XXLARGE = 'XXLARGE',
}

export const unit: number = 8

export const getImageSizeAsPixels = (size: ImageSize): string => {
  return pixelate(imageSizes[size])
}

export const getMediaQuery = (
  minWidth: ScreenSize,
  maxWidth?: ScreenSize
): string => {
  return `@media screen and (min-width: ${pixelate(breakpoints[minWidth])}) ${
    maxWidth ? `and (max-width: ${pixelate(breakpoints[maxWidth])})` : ''
  }`
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
  [VerticalSpacingType.MIN]: 8,
  [VerticalSpacingType.SMALL]: 24,
  [VerticalSpacingType.MEDIUM]: 48,
  [VerticalSpacingType.LARGE]: 96,
  [VerticalSpacingType.XLARGE]: 192,
}

const modalSizes: { [key in ModalSize]: number } = {
  [ModalSize.MOBAIL]: 300,
  [ModalSize.SMALL]: 500,
  [ModalSize.MEDIUM]: 700,
  [ModalSize.LARGE]: 900,
  [ModalSize.XLARGE]: 1100,
}

const imageSizes: { [key in ImageSize]: number } = {
  [ImageSize.SMALL]: 100,
  [ImageSize.MEDIUM]: 300,
  [ImageSize.LARGE]: 500,
  [ImageSize.XLARGE]: 700,
  [ImageSize.XXLARGE]: 900,
}
