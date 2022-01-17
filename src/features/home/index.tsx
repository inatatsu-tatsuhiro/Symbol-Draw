import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import Page from './Presenter'

const Container: React.VFC = () => {
  const navi = useNavigate()

  const inputRef = useRef<HTMLInputElement>(null)

  const openCanvasWithHash = () => {
    if (inputRef.current === null) return
    navi(`/canvas/${inputRef.current.value}`)
  }
  const openCanvas = () => {
    navi(`/canvas`)
  }
  return (
    <Page
      inputRef={inputRef}
      openCanvasWithHash={openCanvasWithHash}
      openCanvas={openCanvas}
    />
  )
}

export default Container
