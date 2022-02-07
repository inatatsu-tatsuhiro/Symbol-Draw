import React, { createContext, Dispatch, useContext, useState } from 'react'

interface Context {
  prikey: string
  setPrikey: Dispatch<string>
}
const PrikeyContext = createContext<Context | undefined>(undefined)

interface Props {
  children: React.ReactNode
}

const PrikeyProvider: React.VFC<Props> = ({ children }) => {
  const [prikey, setPrikey] = useState(
    '891D9D7E9672925123CFB7766CE9AC740BAFED43AE78F64CE2D296F54E62E57A'
  )

  const value = {
    prikey: prikey,
    setPrikey: setPrikey,
  }

  return (
    <PrikeyContext.Provider value={value}>{children}</PrikeyContext.Provider>
  )
}

export default PrikeyProvider

export const usePrikey = (): Context | undefined => {
  return useContext(PrikeyContext)
}
