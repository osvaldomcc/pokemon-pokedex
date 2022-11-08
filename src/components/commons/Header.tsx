import { Helmet } from 'react-helmet-async'

import { Typography } from '@/components/commons'
import { SearchInput } from '@/components/commons/SearchInput'
import OgImg from '@/assets/ogimage.png'

export const Header = () => {
  return (
    <>
      <Helmet>
        <title>Pokedex</title>
        <meta property="og:title" content="Pokedex App" />
        <meta property="og:description" content="The best Pokedex ever" />
        <meta
          property="og:image"
          content={`${window.location.origin}${OgImg}`}
        />
      </Helmet>
      <div className="sticky top-0 bg-white pt-5 pb-5 z-10 px-5 md:relative dark:bg-slate-900">
        <div>
          <Typography variant="h1" className="md:text-center">
            Pokedex
          </Typography>
        </div>
        <div className="max-w-2xl mx-auto">
          <SearchInput labelClassName="md:text-center" />
        </div>
      </div>
    </>
  )
}
