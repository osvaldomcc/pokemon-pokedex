import { Navbar, ScrollToTop } from '@/components/commons'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname
        }}
      />
      <Navbar />
      <Outlet />
      <ScrollToTop />
    </>
  )
}
