import type { AppProps } from 'next/app'
import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { Loader } from '../Loader'

export const RenderedComponent: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  const socket = useSelector((state: StateType) => state.global.socket)

  if (!socket) return <Loader show />

  return <Component {...pageProps} />
}
