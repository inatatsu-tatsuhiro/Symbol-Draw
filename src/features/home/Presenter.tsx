import React, { Ref } from 'react'

import Button from '../../components/elements/Button'
import TextField from '../../components/elements/TextField'
import Centering from '../../components/utils/Centering'
import Spacer from '../../components/utils/Spacer'

export type Props = {
  inputRef: Ref<HTMLInputElement>
  openCanvasWithHash: () => void
  openCanvas: () => void
}

const Page: React.VFC<Props> = ({
  inputRef,
  openCanvasWithHash,
  openCanvas,
}) => {
  return (
    <Centering direction="column" holizontal="start">
      <Spacer margin="16px">
        <div>Symbol Draw</div>
      </Spacer>
      <TextField text="TransactionHash" inputRef={inputRef} />
      <Button text="START" onClick={openCanvasWithHash} />
      <Button text="START NEW GAME" onClick={openCanvas} />
    </Centering>
  )
}

export default Page
