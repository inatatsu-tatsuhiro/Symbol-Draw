import React from 'react'
import styled from 'styled-components'

import { Button } from '@mui/material'
import Color, { addAlpha } from '../../../utils/Color'

export interface Props {
  text: string
  onClick: () => void
  fill?: boolean
}

const Component: React.VFC<Props> = ({ text, onClick, fill = false }) => {
  if (fill) {
    return (
      <FButton variant="outlined" onClick={onClick}>
        {text}
      </FButton>
    )
  }

  return (
    <SButton variant="outlined" onClick={onClick}>
      {text}
    </SButton>
  )
}

export default Component

const FButton = styled(Button)`
  color: white !important;
  background: ${Color.accent.purple} !important;
  border-color: ${Color.accent.purple} !important;
  font-weight: 700;
`
const SButton = styled(Button)`
  color: ${Color.accent.pink} !important;
  border-color: ${Color.accent.purple} !important;

  :hover {
    border-color: ${Color.accent.purple} !important;
    background-color: ${addAlpha(Color.accent.purple, 0.04)} !important;
  }
`
