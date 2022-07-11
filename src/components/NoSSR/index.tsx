import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const NoSSR = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})
