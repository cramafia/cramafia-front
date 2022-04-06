export enum Font {
  SANS = 'SANS',
  INTER = 'INTER',
  NOSIFER = 'NOSIFER',
}

export const getFont = (font: Font): string => {
  return fonts[font] || fonts[Font.SANS]
}

const fonts: { [key in Font]: string } = {
  [Font.NOSIFER]: `Nosifer`,
  [Font.SANS]: `"Noto Sans", sans-serif`,
  [Font.INTER]: `Inter`,
}
