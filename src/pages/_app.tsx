import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../global.styles'
import { getTheme, Theme } from '../theme/color'
import { ThemeGlobal } from '../theme/ThemeGlobal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeGlobal theme={getTheme(Theme.BLACK)}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeGlobal>
    </>
  )
}

export default MyApp
