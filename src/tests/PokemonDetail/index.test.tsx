import { cleanup, screen, waitFor } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { renderWithClient } from '@/helpers/testUtils'
import { PokemonDetail } from '@/pages/PokemonDetail/index'

describe('Pokemon', () => {
  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('should render properly', () => {
    renderWithClient(<PokemonDetail />)
  })

  it('should render the loading', async () => {
    renderWithClient(<PokemonDetail />)
    await screen.findByTestId('loading')
  })

  it('should render the search', async () => {
    renderWithClient(<PokemonDetail />)
    await screen.findByRole('textbox')
  })

  it('should render the search', async () => {
    const name = 'bulbasaur'

    vi.mock('react-router-dom', () => ({
      ...vi.importActual('react-router-dom'),
      useParams: () => ({ name: 'bulbasaur' }),
      useNavigate: () => vi.fn(),
    }))

    renderWithClient(<PokemonDetail />)
    const param = await waitFor(() => screen.findByTestId('poke-params'))
    expect(param.textContent).toBe(name)
  })
})
