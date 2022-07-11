import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const ErrorFallback = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/404')
  }, [])
  return <></>
}
