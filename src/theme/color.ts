export enum Theme {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export enum Color {
  BLACK = `BLACK`,
  WHITE = 'WHITE',
  GREEN_100 = 'GREEN_100',
  RED_500 = 'RED_500',
  RED_100 = 'RED_100',
  GRAY_200 = 'GRAY_200',
  GRAY_400 = 'GRAY_400',
  YELLOW_100 = 'YELLOW_100',
  DARK_LIGHT_300 = 'DARK_LIGHT_300',
  DARK_LIGHT_200 = 'DARK_LIGHT_200',
}

export type ThemeType = {
  background: {
    primary: string
    secondary: string
    opposite: string
  }
  color: {
    primary: string
    secondary: string
    opposite: string
  }
}

export const getColor = (color: Color): string => {
  return colors[color]
}

export const getColorWithOpacity = (color: Color) => {}

export const getTheme = (theme: Theme): ThemeType => {
  return themes[theme] || themes[Theme.WHITE]
}

const colors: { [key in Color]: string } = {
  [Color.BLACK]: '#000',
  [Color.WHITE]: '#FFF',
  [Color.GREEN_100]: '#49bfa5',
  [Color.RED_500]: '#840101',
  [Color.RED_100]: '#d7273d',
  [Color.GRAY_400]: '#666666',
  [Color.GRAY_200]: '#949999',
  [Color.YELLOW_100]: '#F9DC38',
  [Color.DARK_LIGHT_300]: '#191C22',
  [Color.DARK_LIGHT_200]: '#303238',
}

const themes: { [key in Theme]: ThemeType } = {
  [Theme.BLACK]: {
    background: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
      opposite: getColor(Color.WHITE),
    },
    color: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
      opposite: getColor(Color.BLACK),
    },
  },
  [Theme.WHITE]: {
    background: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
      opposite: getColor(Color.BLACK),
    },
    color: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
      opposite: getColor(Color.WHITE),
    },
  },
}
