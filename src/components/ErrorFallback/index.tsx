import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const ErrorFallback: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router
      .push('/404')
      .then(() => {})
      .catch(() => {})
  }, [])

  return <></>
}
