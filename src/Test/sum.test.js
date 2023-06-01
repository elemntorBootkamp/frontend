import React from 'react'
import { render } from '@testing-library/react'
import {Sum}from "../components/sum"

test('renders the component with the correct text', () => {
    const { sum } = render(<Sum/>)
    const rezult = sum(1,2)
    expect(rezult).toBe(3)
  })