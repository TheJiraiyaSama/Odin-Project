import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app and displays initial count of 0', () => {
    render(<App />)

    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
  })
})
