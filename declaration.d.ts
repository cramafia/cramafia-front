import { AriaAttributes, DOMAttributes } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    name?: string
  }
}

declare module 'react-awesome-loaders'
declare module '@videosdk.live/react-sdk'
