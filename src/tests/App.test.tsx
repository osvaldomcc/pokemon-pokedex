import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import App from '../App'

describe('App Test', () => {
  it('Should render App', () => {
    render(<App />)
    screen.getByText(/App v1.0.2/i)
  })
})
