import React from 'react'

export interface Props {
  hash: string
}

const Page: React.VFC<Props> = ({ hash }) => {
  return <div>Canvas: {hash}</div>
}

export default Page
