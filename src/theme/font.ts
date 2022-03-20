export enum Font {
  SANS = 'SANS',
}

export const getFont = (font: Font): string => {
  return fonts[font] || fonts[Font.SANS]
}

const fonts: { [key in Font]: string } = {
  [Font.SANS]: `"Noto Sans", sans-serif`,
}
