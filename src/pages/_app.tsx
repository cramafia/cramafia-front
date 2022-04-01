import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '../theme/ThemeGlobal'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Modal } from '../components/Modal'
import { Alert } from '../components/Alerts/Alert'

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
