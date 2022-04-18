import 'bootstrap/dist/css/bootstrap.min.css'
import '@/theme/fonts/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState, Suspense } from 'react'
import { useRouter } from 'next/router'

import GlobalStyles from '../global.styles'
import { ThemeGlobal } from '../theme/ThemeGlobal'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Modal } from '../components/Modal'
import { Alert } from '../components/Alert'
import { Loader } from '@/components/Loader'

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZsb29kZWQiLCJpYXQiOjE2NTAxNjI5NjQsImV4cCI6MTY1MDE2NDE2NH0.LsOwUMjYv6O6oP1Aw2QSLHW0s2Ax6gOe1w-p-nbYPO0'
    )
  }, [])

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true)
    }
    const handleComplete = () => {
      setPageLoading(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Suspense>
          <ThemeGlobal>
            {pageLoading && <Loader />}
            <Modal />
            <Alert />
            {/*TODO*/}
            {/*@ts-ignore*/}
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeGlobal>
        </Suspense>
      </Provider>
    </>
  )
}

export default MyApp
