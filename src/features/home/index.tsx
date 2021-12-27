import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import Page from './Presenter'

const Container: React.VFC = () => {
  const navi = useNavigate()

  const inputRef = useRef<HTMLInputElement>(null)

  const click = () => {
    if (inputRef.current === null) return
    navi(`/canvas/${inputRef.current.value}`)
  }
  return <Page inputRef={inputRef} click={click} />
}

export default Container
