import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'
import { usePrikey } from '../../utils/PrikeyContext'

import Page from './Presenter'

const Container: React.VFC = () => {
  const navi = useNavigate()

  const inputRef = useRef<HTMLInputElement>(null)
  const pkRef = useRef<HTMLInputElement>(null)

  const context = usePrikey()
  const setKey = () => {
    if (!context || pkRef === null || pkRef.current === null) return

    context.setPrikey(pkRef.current.value)
  }

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
