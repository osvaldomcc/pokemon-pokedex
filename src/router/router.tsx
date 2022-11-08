import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'
import { Pokedex, PokemonDetail } from '@/pages'
import { NotFound } from '@/pages/Errors'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Pokedex />,
      },
      {
        path: 'pokemon/:name',
        element: <PokemonDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
