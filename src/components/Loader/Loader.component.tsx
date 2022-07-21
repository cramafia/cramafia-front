import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { Wrapper } from './Loader.styles'
import { Props } from './Loader.types'
import { SunspotLoader } from './SunspotLoader'

import { Color } from '@/theme/color'

export const Loader: React.FC<Props> = ({ show }) => {
  const loaderState = useSelector((state: StateType) => state.global.showLoader)

  if (!loaderState && !show) return <></>

  return (
    <Wrapper units={30}>
      <SunspotLoader
        className="none_transition"
        gradientColors={[Color.RED_100, Color.PURPLE_200]}
        duration={2}
      />
    </Wrapper>
  )
}
