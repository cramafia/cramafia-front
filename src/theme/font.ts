export enum Font {
  SANS = 'SANS',
  INTER = 'INTER',
}

export const getFont = (font: Font): string => {
  return fonts[font] || fonts[Font.SANS]
}

const fonts: { [key in Font]: string } = {
  [Font.SANS]: `"Noto Sans", sans-serif`,
  [Font.INTER]: `Inter`,
}
