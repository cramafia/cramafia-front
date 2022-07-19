import React from 'react'
import { SunspotLoader } from 'react-awesome-loaders'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { Wrapper } from './Loader.styles'
import { Props } from './Loader.types'

export const Loader: React.FC<Props> = ({ show }) => {
  const loaderState = useSelector((state: StateType) => state.global.showLoader)

  if (!loaderState && !show) return <></>

  return (
    <Wrapper units={30}>
      <SunspotLoader
        className="none_transition"
        gradientColors={['#6366F1', '#E0E7FF']}
        shadowColor="#3730A3"
      />
    </Wrapper>
  )
}
