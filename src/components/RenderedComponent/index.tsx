import type { AppProps } from 'next/app'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'
import { Loader } from '../Loader'

export const RenderedComponent = ({ Component, pageProps }: AppProps) => {
  const socket = useSelector((state: StateType) => state.global.socket)

  if (!socket) return <Loader show={true} />

  return <Component {...pageProps} />
}
