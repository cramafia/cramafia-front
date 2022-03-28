import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../global.styles'
import { getTheme, Theme } from '../theme/color'
import { ThemeGlobal } from '../theme/ThemeGlobal'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Modal } from '../components/Modal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeGlobal theme={getTheme(Theme.WHITE)}>
          <Modal />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeGlobal>
      </Provider>
    </>
  )
}

export default MyApp
