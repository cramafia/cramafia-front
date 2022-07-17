import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authorizeUser } from 'src/redux/reducers/global.reducer'
import type { AppProps } from './types'

export function Application({ children }: AppProps) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authorizeUser(!!localStorage.getItem('access_token')))
  }, [dispatch])

  return <>{children}</>
}

export default Application
