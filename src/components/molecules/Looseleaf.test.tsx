import { render, screen } from '@testing-library/react'
import React from 'react'
import Looseleaf from 'components/molecules/Looseleaf'

describe('<Note />', () => {
  test('should render component', () => {
    const text = 'Lorem ipsum dolor sit amet'
    render(<Looseleaf>{text}</Looseleaf>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
