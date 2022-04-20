import { createGlobalStyle } from 'styled-components'

import { StyledScroll } from './styles'

const GlobalStyles = createGlobalStyle`

  * {
    transition: all 0.25s linear;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
  ${StyledScroll}

	html, body {
		box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		touch-action: pan-y;
	}
	*, *:before, *:after {
		box-sizing: inherit;
		user-drag: none;
	}
  input {
    [type='search']::-webkit-search-decoration,
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-results-button,
    [type='search']::-webkit-search-results-decoration {
      -webkit-appearance: none !important;
    }
    .hide-clear[type='search']::-ms-clear,
    .hide-clear[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    :focus, :active {
        outline: none !important;
        box-shadow: none !important;
    }
    user-select: auto;
    appearance: none;
    border-radius: 0;
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
  }
`

export default GlobalStyles
