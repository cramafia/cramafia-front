export enum Theme {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export enum Color {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  WHITE_300 = 'WHITE_300',
  GREEN_100 = 'GREEN_100',
  RED_500 = 'RED_500',
  RED_400 = 'RED_400',
  RED_100 = 'RED_100',
  GRAY_400 = 'GRAY_400',
  YELLOW_500 = 'YELLOW_500',
  YELLOW_100 = 'YELLOW_100',
  DARK_BLUE_500 = 'DARK_BLUE_500',
  DARK_LIGHT_500 = 'DARK_LIGHT_500',
  DARK_LIGHT_400 = 'DARK_LIGHT_400',
  DARK_LIGHT_300 = 'DARK_LIGHT_300',
  DARK_LIGHT_200 = 'DARK_LIGHT_200',
  GRAY_200 = 'GRAY_200',
  GRAY_100 = 'GRAY_100',
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
  [Color.WHITE_300]: '#F2F2F2',
  [Color.GREEN_100]: '#49bfa5',
  [Color.RED_500]: '#840101',
  [Color.RED_400]: '#A70202',
  [Color.RED_100]: '#d7273d',
  [Color.GRAY_400]: '#666666',
  [Color.GRAY_200]: '#949999',
  [Color.GRAY_100]: '#babbbd',
  [Color.YELLOW_500]: '#CDB200',
  [Color.YELLOW_100]: '#F9DC38',
  [Color.DARK_BLUE_500]: '#191d24',
  [Color.DARK_LIGHT_500]: '#0F0F0F',
  [Color.DARK_LIGHT_400]: '#141414',
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
