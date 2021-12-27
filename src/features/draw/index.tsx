import React from "react"
import Page from "./Presenter"
import { useParams } from "react-router-dom"

const Container: React.VFC = () => {
  const { hash } = useParams()
  return <Page hash={hash || ''}/>
}

export default Container
