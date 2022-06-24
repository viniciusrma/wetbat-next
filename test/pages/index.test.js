import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from '../../components/Header/Header'

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />)

    const logo = screen.getByAltText(/wetbat logo/i)

    expect(logo).toBeInTheDocument()
  })
})
