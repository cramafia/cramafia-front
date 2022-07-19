import { useState, useEffect, MutableRefObject } from 'react'

export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
