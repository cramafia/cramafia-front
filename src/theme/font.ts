export enum Font {
  SANS = 'SANS',
  INTER = 'INTER',
  NOSIFER = 'NOSIFER',
  ROBOTTO = 'ROBOTTO',
  BEBAS = 'BEBAS',
  FJALLA_ONE = 'FJALLA_ONE',
  ABRIL = 'ABRIL',
  QUICKSAND = 'QUICKSAND',
  ROBOTTO_LIGHT = 'ROBOTTO_LIGHT',
  COMFORTAA_MEDIUM = 'COMFORTAA_MEDIUM',
  REGGAE = 'REGGAE',
  PRESS_START = 'PRESS_START',
}

export const getFont = (font: Font): string => {
  return fonts[font] || fonts[Font.SANS]
}

const fonts: { [key in Font]: string } = {
  [Font.NOSIFER]: `Nosifer`,
  [Font.SANS]: `"Noto Sans", sans-serif`,
  [Font.INTER]: `Inter`,
  [Font.ROBOTTO]: `Robotto`,
  [Font.BEBAS]: `Bebas`,
  [Font.FJALLA_ONE]: `FjallaOne`,
  [Font.ABRIL]: `Abril`,
  [Font.QUICKSAND]: `Quicksand`,
  [Font.ROBOTTO_LIGHT]: `RobottoLight`,
  [Font.COMFORTAA_MEDIUM]: `ComfortaaMedium`,
  [Font.REGGAE]: `Reggae`,
  [Font.PRESS_START]: `PressStart`,
}
