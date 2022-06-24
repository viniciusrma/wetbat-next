import { render, screen } from '@testing-library/react'
import Header from '../../components/Header/Header'

test('Header', () => {
  const { getByAltText } = render(<Header />)
  expect(getByAltText('wetbat logo')).toBeInTheDocument()
})

test('Header', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('navbtn')).toBeTruthy()
})
