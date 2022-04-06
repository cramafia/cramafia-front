import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'

import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '../theme/ThemeGlobal'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Modal } from '../components/Modal'
import { Alert } from '../components/Alert'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeGlobal>
          <Modal />
          <Alert />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeGlobal>
      </Provider>
    </>
  )
}

export default MyApp
