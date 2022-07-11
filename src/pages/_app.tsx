import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'

import { store } from '../redux/store'
import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '@/theme/ThemeGlobal'
import { Modal } from '@/components/Modal'
import { Alert } from '@/components/Alert'
import Application from '@/components/Application'
import { Socket } from '@/components/Socket'
import { ErrorFallback } from '@/components/ErrorFallback'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cramafia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ErrorBoundary
        onError={(e) => console.log(e)}
        FallbackComponent={ErrorFallback}
      >
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
      </ErrorBoundary>
    </>
  )
}

export default MyApp
