export enum Theme {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export enum Color {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  GREEN_100 = 'GREEN_100',
  RED_500 = 'RED_500',
  RED_100 = 'RED_100',
}

export type ThemeType = {
  background: {
    primary: string
    secondary: string
  }
  color: {
    primary: string
    secondary: string
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
}

const themes: { [key in Theme]: ThemeType } = {
  [Theme.BLACK]: {
    background: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
    },
    color: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
    },
  },
  [Theme.WHITE]: {
    background: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
    },
    color: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
    },
  },
}
