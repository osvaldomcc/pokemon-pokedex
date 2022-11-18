import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import { describe, it, vi } from 'vitest'
import { renderWithClient } from '@/helpers/testUtils'
import { Pokedex } from '@/pages'

describe('Pokemon', () => {
  beforeEach(() => {
    const IntersectionObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }))

    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
  })

  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it('should render properly', () => {
    renderWithClient(<Pokedex />)
  })

  it('should render the loading', () => {
    renderWithClient(<Pokedex />)
    screen.getByTestId('loading')
  })

  it('should render Pokedex title', () => {
    renderWithClient(<Pokedex />)
    screen.getByText('Pokedex')
  })

  it('should render the search', () => {
    renderWithClient(<Pokedex />)
    screen.getByRole('textbox')
  })

  it('should render the theme and switch it', async () => {
    renderWithClient(<Pokedex />)
    await waitFor(() => expect(document.body).toHaveClass('light'))
    const moonBtn = await screen.findByTestId('moon-btn')
    user.setup()
    user.click(moonBtn)
    await waitFor(() =>
      expect(document.body).toHaveClass('dark')
    )
  })
})
