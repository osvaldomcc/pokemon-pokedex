import { render } from '@testing-library/react'
import { rest } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { MyApp } from '@/components/commons'
import { BrowserRouter } from 'react-router-dom'

export const handlers = [
  rest.get('*/pokemon', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 0,
        next: 'https://pokeapi.co/api/v2/next',
        previous: 'https://pokeapi.co/api/v2/prev',
        results: [],
      })
    )
  }),
  rest.get('*/pokemon/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        base_experience: 0,
        forms: [],
        id: 1,
        name: 'bulbasaur',
        order: 1,
        species: {
          name: 'bulba',
          url: 'https://www.google.com',
        },
        sprites: {
          back_default: 'string',
          back_shiny: 'string',
          front_default: 'string',
          front_shiny: 'string',
        },
        stats: [],
        types: [],
        weight: 600,
        image: 'bulba',
        abilities: [],
        ability: 'The best pokemon ever',
      })
    )
  }),
  rest.get('*/ability/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        effect_entries: [],
      })
    )
  }),
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })

export function renderWithClient(ui: React.ReactElement) {
  const { rerender, ...result } = render(wrapper(ui))
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) => rerender(wrapper(rerenderUi)),
  }
}

export function wrapper(ui: React.ReactNode) {
  const testQueryClient = createTestQueryClient()
  return (
    <QueryClientProvider client={testQueryClient}>
      <HelmetProvider>
        <MyApp>
          <BrowserRouter>{ui}</BrowserRouter>
        </MyApp>
      </HelmetProvider>
    </QueryClientProvider>
  )
}

export function wrapperHook({ children }: any) {
  const testQueryClient = createTestQueryClient()
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
