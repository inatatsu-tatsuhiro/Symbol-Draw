import React from 'react'
import { render } from '@testing-library/react'

import Component from './index'

const text = 'TEXT FIELD TEXT'

test('text field: matching text', () => {
  const { container } = render(<Component text={text} inputRef={null} />)
  expect(container.innerHTML).toMatch(text)
})

test('text field: snapshot testing', () => {
  const { asFragment } = render(<Component text={text} inputRef={null} />)
  expect(asFragment()).toMatchSnapshot()
})
