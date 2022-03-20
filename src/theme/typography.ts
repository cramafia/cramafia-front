import { css, FlattenSimpleInterpolation } from 'styled-components'
import { getFont, Font } from './font'
import { getMediaQuery, ScreenSize } from './layout'

export enum Typography {
  NAVIGATION = 'NAVIGATION',
  HEADING_1 = 'HEADING_1',
  SUB_HEADING_1 = 'SUB_HEADING_1',
  BODY_REGULAR = 'BODY_REGULAR',
  BODY_SMALL = 'BODY_SMALL',
}

export const getTypography = (t: Typography) => {
  return typography[t]
}

const typography: { [key in Typography]: FlattenSimpleInterpolation } = {
  [Typography.NAVIGATION]: css`
    font-family: ${getFont(Font.SANS)};
    font-size: 14px;
    line-height: 1.3;
    text-decoration: none;

    ${getMediaQuery(ScreenSize.LARGE)} {
      font-size: 16px;
    }
  `,
  [Typography.HEADING_1]: css`
    font-family: ${getFont(Font.SANS)};
    font-weight: 400;
    font-size: 26px;
    text-decoration: none;
    letter-spacing: -0.04em;
    line-height: 1.1;

    ${getMediaQuery(ScreenSize.LARGE)} {
      font-size: 60px;
    }

    ${getMediaQuery(ScreenSize.XLARGE)} {
      font-size: 90px;
    }
  `,
  [Typography.SUB_HEADING_1]: css`
    font-family: ${getFont(Font.SANS)};
    font-weight: 400;
    font-size: 25px;
    text-decoration: none;
    letter-spacing: -0.02em;
    line-height: 1.2;

    ${getMediaQuery(ScreenSize.LARGE)} {
      font-size: 28px;
    }
  `,
  [Typography.BODY_REGULAR]: css`
    font-family: ${getFont(Font.SANS)};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0;

    ${getMediaQuery(ScreenSize.LARGE)} {
      font-size: 22px;
    }

    ${getMediaQuery(ScreenSize.XLARGE)} {
      font-size: 25px;
    }
  `,
  [Typography.BODY_SMALL]: css`
    font-family: ${getFont(Font.SANS)};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0;

    ${getMediaQuery(ScreenSize.LARGE)} {
      font-size: 16px;
    }

    ${getMediaQuery(ScreenSize.XLARGE)} {
      font-size: 18px;
    }
  `,
}
