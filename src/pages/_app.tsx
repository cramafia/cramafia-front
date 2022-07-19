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
import { Loader } from '@/components/Loader'
import { RenderedComponent } from '@/components/RenderedComponent'
import { Settings } from '@/components/Settings'

function MyApp(appProps: AppProps) {
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
              <Loader />
              <Modal />
              <Alert />
              <Settings />
              {/*TODO*/}
              {/*@ts-ignore*/}
              <GlobalStyles />
              <RenderedComponent {...appProps} />
            </ThemeGlobal>
          </Application>
        </Provider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
