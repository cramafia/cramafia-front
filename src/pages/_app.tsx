import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { Socket } from '@/components/Socket'
import { store } from '../redux/store'

import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '@/theme/ThemeGlobal'
import { Modal } from '@/components/Modal'
import { Alert } from '@/components/Alert'
import Application from '@/components/Application'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cramafia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Socket />
        <Application>
          <ThemeGlobal>
            <Modal />
            <Alert />
            {/*TODO*/}
            {/*@ts-ignore*/}
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeGlobal>
        </Application>
      </Provider>
    </>
  )
}

export default MyApp
