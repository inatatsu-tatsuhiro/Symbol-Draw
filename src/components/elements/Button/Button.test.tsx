import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Component from './index'

const text = 'BUTTON TEXT'

test('button: matching text', () => {
  const { container } = render(
    <Component text={text} onClick={() => console.log('')} />
  )
  expect(container.innerHTML).toMatch(text)
})

test('button: snapshot testing', () => {
  const { asFragment } = render(
    <Component text={text} onClick={() => console.log('')} />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('button: onClick', () => {
  const handleClick = jest.fn()
  const { getByText } = render(
    <Component text={text} onClick={() => handleClick()} />
  )
  fireEvent.click(getByText(text))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
