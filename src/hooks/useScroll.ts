import { useCallback, useEffect, useState } from 'react'

export const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)
  const [applyAnimation, setApplyAnimation] = useState<boolean>(false)
  const [toggleVisible, setToggleVisible] = useState<boolean>(false)

  const scrollTop = () => {
    window.scroll(0, 0)
  }

  const watchScroll = useCallback(() => {
    const st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
      setApplyAnimation(true)
    } else {
      setApplyAnimation(false)
    }
    const lastScroll = st <= 0 ? 0 : st
    setLastScrollTop(lastScroll)
  }, [lastScrollTop])

  useEffect(() => {
    window.addEventListener('scroll', watchScroll)
    return () => {
      window.removeEventListener('scroll', watchScroll)
    }
  }, [watchScroll])

  useEffect(() => {
    const tm: NodeJS.Timeout = setTimeout(() => {
      setToggleVisible(applyAnimation)
    }, 252)
    return () => {
      clearTimeout(tm)
    }
  }, [applyAnimation])

  return {
    scrollTop,
    toggleVisible,
    applyAnimation,
  }
}
