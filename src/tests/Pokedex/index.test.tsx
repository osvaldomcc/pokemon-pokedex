import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
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

  it('should render the loading', async () => {
    renderWithClient(<Pokedex />)
    await screen.findByTestId('loading')
  })

  it('should render Pokedex title', async () => {
    renderWithClient(<Pokedex />)
    await screen.findByText('Pokedex')
  })

  it('should render the search', async () => {
    renderWithClient(<Pokedex />)
    await screen.findByRole('textbox')
  })

  it('should render the theme and switch it', async () => {
    renderWithClient(<Pokedex />)
    await waitFor(() => expect(document.body.className).toBe('light'))
    const moonBtn = await screen.findByTestId('moon-btn')
    fireEvent.click(moonBtn)
    await waitFor(() =>
      expect(document.body.className.includes('dark')).toBeTruthy()
    )
  })
})
