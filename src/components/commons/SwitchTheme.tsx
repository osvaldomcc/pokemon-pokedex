import { MoonIcon, SunIcon } from '@/components/icons'
import { useEffect, useState } from 'react'

export const SwitchTheme = () => {
  const [theme, setTheme] = useState<string>('light')

  const handleClick = (newTheme: string) => {
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const storeTheme: string = window.localStorage.getItem('theme') || 'light'
    setTheme(storeTheme)
  }, [])

  useEffect(() => {
    document.body.classList.remove(theme === 'dark' ? 'light' : 'dark')
    document.body.classList.add(theme)
    if (theme === 'dark') {
      document.body.classList.add('dark:bg-slate-900')
    } else {
      document.body.classList.remove('dark:bg-slate-900')
    }
  }, [theme])

  return (
    <>
      {theme === 'dark' ? (
        <button onClick={() => handleClick('light')}>
          <SunIcon />
        </button>
      ) : (
        <button onClick={() => handleClick('dark')} data-testid="moon-btn">
          {' '}
          <MoonIcon className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
