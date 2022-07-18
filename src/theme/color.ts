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
  YELLOW_500 = 'YELLOW_500',
  YELLOW_100 = 'YELLOW_100',
  DARK_BLUE_500 = 'DARK_BLUE_500',
  BLUE_200 = 'BLUE_200',
  DARK_LIGHT_500 = 'DARK_LIGHT_500',
  DARK_LIGHT_400 = 'DARK_LIGHT_400',
  DARK_LIGHT_300 = 'DARK_LIGHT_300',
  DARK_LIGHT_200 = 'DARK_LIGHT_200',
  GRAY_500 = 'GRAY_500',
  GRAY_400 = 'GRAY_400',
  GRAY_200 = 'GRAY_200',
  GRAY_100 = 'GRAY_100',
  PURPLE_200 = 'PURPLE_200',
}

export enum Opacity {
  _40 = '_40',
  _10 = '_10',
}

export type ThemeType = {
  background: {
    primary: string
    secondary: string
    opposite: string
    createLobby: {
      gameNameInput: string
    }
    lobbiesTable: {
      row: string
    }
    gameSearch: {
      defaultButton: string
    }
    user: {
      optionsContainer: string
    }
    modal: {
      default: string
      input: string
    }
    themeSwitcher: string
  }
  color: {
    primary: string
    secondary: string
    opposite: string
    footer: {
      listHeader: string
    }
    border: string
    sidebar: {
      listItem: string
    }
    scrollbar: {
      default: string
      thumb: string
    }
  }
}

export const getColor = (color: Color): string => {
  return colors[color]
}

export const getColorWithOpacity = (color: Color, opacity: Opacity): string => {
  return getColor(color) + getOpacity(opacity)
}

export const getOpacity = (_opacity: Opacity): string => {
  return opacity[_opacity]
}

export const getTheme = (theme: Theme): ThemeType => {
  return themes[theme] || themes[Theme.WHITE]
}

const opacity: { [key in Opacity]: string } = {
  [Opacity._40]: '66',
  [Opacity._10]: '1A',
}

const colors: { [key in Color]: string } = {
  [Color.BLACK]: '#000000',
  [Color.WHITE]: '#FFFFFF',
  [Color.WHITE_300]: '#F2F2F2',
  [Color.GREEN_100]: '#49bfa5',
  [Color.RED_500]: '#840101',
  [Color.RED_400]: '#A70202',
  [Color.RED_100]: '#d7273d',
  [Color.GRAY_500]: '#272727',
  [Color.GRAY_400]: '#666666',
  [Color.GRAY_200]: '#949999',
  [Color.GRAY_100]: '#babbbd',
  [Color.YELLOW_500]: '#CDB200',
  [Color.YELLOW_100]: '#F9DC38',
  [Color.DARK_BLUE_500]: '#191d24',
  [Color.BLUE_200]: '#a3dafb',
  [Color.DARK_LIGHT_500]: '#0F0F0F',
  [Color.DARK_LIGHT_400]: '#141414',
  [Color.DARK_LIGHT_300]: '#191C22',
  [Color.DARK_LIGHT_200]: '#303238',
  [Color.PURPLE_200]: '#7255A5',
}

const themes: { [key in Theme]: ThemeType } = {
  [Theme.BLACK]: {
    background: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
      opposite: getColor(Color.WHITE),
      createLobby: {
        gameNameInput: getColor(Color.DARK_LIGHT_200),
      },
      lobbiesTable: {
        row: getColor(Color.DARK_LIGHT_400),
      },
      gameSearch: {
        defaultButton: getColor(Color.DARK_LIGHT_500),
      },
      user: {
        optionsContainer: getColor(Color.DARK_LIGHT_300),
      },
      modal: {
        default: getColor(Color.DARK_BLUE_500),
        input: getColor(Color.DARK_LIGHT_200),
      },
      themeSwitcher: getColor(Color.DARK_LIGHT_200),
    },
    color: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
      opposite: getColor(Color.BLACK),
      footer: {
        listHeader: getColor(Color.GRAY_200),
      },
      border: getColorWithOpacity(Color.WHITE, Opacity._10),
      sidebar: {
        listItem: getColor(Color.GRAY_100),
      },
      scrollbar: {
        default: getColor(Color.DARK_LIGHT_500),
        thumb: getColor(Color.DARK_BLUE_500),
      },
    },
  },
  [Theme.WHITE]: {
    background: {
      primary: getColor(Color.WHITE),
      secondary: getColor(Color.WHITE),
      opposite: getColor(Color.BLACK),
      createLobby: {
        gameNameInput: getColor(Color.WHITE),
      },
      lobbiesTable: {
        row: getColor(Color.DARK_LIGHT_200),
      },
      gameSearch: {
        defaultButton: getColor(Color.DARK_LIGHT_200),
      },
      user: {
        optionsContainer: getColor(Color.WHITE_300),
      },
      modal: {
        default: getColor(Color.WHITE),
        input: getColor(Color.WHITE),
      },
      themeSwitcher: getColor(Color.WHITE_300),
    },
    color: {
      primary: getColor(Color.BLACK),
      secondary: getColor(Color.BLACK),
      opposite: getColor(Color.WHITE),
      footer: {
        listHeader: getColor(Color.GRAY_200),
      },
      border: getColorWithOpacity(Color.BLACK, Opacity._10),
      sidebar: {
        listItem: getColor(Color.DARK_LIGHT_300),
      },
      scrollbar: {
        default: getColor(Color.GRAY_100),
        thumb: getColor(Color.GRAY_200),
      },
    },
  },
}
