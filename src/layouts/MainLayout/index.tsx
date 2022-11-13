import { Navbar, ScrollToTop } from '@/components/commons'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ['/']
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key
        }}
      />
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </>
  )
}
