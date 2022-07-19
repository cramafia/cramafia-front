import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import GlobalStyles from '../global.styles'
import { store } from '../redux/store'

import { Alert } from '@/components/Alert'
import { Application } from '@/components/Application'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Loader } from '@/components/Loader'
import { Modal } from '@/components/Modal'
import { RenderedComponent } from '@/components/RenderedComponent'
import { Socket } from '@/components/Socket'
import { ThemeGlobal } from '@/theme/ThemeGlobal'

const MyApp: React.FC<AppProps> = (appProps) => {
  return (
    <>
      <Head>
        <title>Cramafia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <Socket />
          <Application>
            <ThemeGlobal>
              <Loader />
              <Modal />
              <Alert />
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
