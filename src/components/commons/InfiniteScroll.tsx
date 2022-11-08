import { useCallback, useEffect, useRef } from 'react'
import { ThunderIcon } from '../icons'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
  onReachEnd: () => void
  isLoading: boolean
}

export const InfiniteScroll = ({ children, onReachEnd, isLoading }: IProps) => {
  const loader = useRef<HTMLDivElement | null>(null)

  const handleObserver = useCallback(
    (entries: any) => {
      const target = entries[0]
      if (target.isIntersecting) {
        onReachEnd()
      }
    },
    [onReachEnd]
  )

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <>
      {children}
      <div ref={loader} />
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <ThunderIcon className="w-9 h-9 animate-bounce dark:text-gray-300" />
        </div>
      )}
    </>
  )
}
