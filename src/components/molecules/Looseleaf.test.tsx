import {render, screen} from "@testing-library/react"
import Looseleaf from "components/molecules/Looseleaf"
import React from 'react'

describe('<Note />', () => {
  test('should render component', () => {
    const text = 'Lorem ipsum dolor sit amet'
    render(<Looseleaf>{text}</Looseleaf>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
