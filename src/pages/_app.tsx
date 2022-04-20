import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { io, Socket } from 'Socket.IO-client'

import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '../theme/ThemeGlobal'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Modal } from '../components/Modal'
import { Alert } from '../components/Alert'
import { DefaultEventsMap } from '@socket.io/component-emitter'

let socket: Socket<DefaultEventsMap, DefaultEventsMap>
socket = io('http://localhost:5000')

function MyApp({ Component, pageProps }: AppProps) {
  const socketInitializer = async () => {
    socket.on('ping', (cb) => {
      cb(true)
    })
  }
  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZsb29kZWQiLCJpYXQiOjE2NTAxNjI5NjQsImV4cCI6MTY1MDE2NDE2NH0.LsOwUMjYv6O6oP1Aw2QSLHW0s2Ax6gOe1w-p-nbYPO0'
    )
    socketInitializer()
  }, [])
  return (
    <>
      <Head>
        <title>Cramafia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeGlobal>
          <Modal />
          <Alert />
          {/*TODO*/}
          {/*@ts-ignore*/}
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeGlobal>
      </Provider>
    </>
  )
}

export default MyApp
