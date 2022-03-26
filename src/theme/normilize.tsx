import { css, FlattenSimpleInterpolation } from 'styled-components'

export enum NormilizeComponents {
  BUTTON = 'BUTTON',
  INPUT = 'INPUT',
}

export const getNormilizeComponentAsStyle = (
  t: NormilizeComponents
): FlattenSimpleInterpolation => {
  return components[t]
}

const components: { [key in NormilizeComponents]: FlattenSimpleInterpolation } =
  {
    [NormilizeComponents.BUTTON]: css`
      :focus,
      :active {
        background: transparent;
        box-shadow: none;
      }
    `,
    [NormilizeComponents.INPUT]: css`
      [type='search']::-webkit-search-decoration,
      [type='search']::-webkit-search-cancel-button,
      [type='search']::-webkit-search-results-button,
      [type='search']::-webkit-search-results-decoration {
        -webkit-appearance: none;
      }
      .hide-clear[type='search']::-ms-clear,
      .hide-clear[type='search']::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
      }
      user-select: auto;
      appearance: none;
      border-radius: 0;
      border: none;
      background-image: none;
      background-color: transparent;
      box-shadow: none;
      outline: none;
    `,
  }
