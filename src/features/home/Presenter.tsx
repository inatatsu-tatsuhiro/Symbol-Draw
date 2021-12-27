import React, { Ref } from 'react'

import Button from '../../components/elements/Button'
import TextField from '../../components/elements/TextField'
import Centering from '../../components/utils/Centering'
import Spacer from '../../components/utils/Spacer'

export type Props = {
  inputRef: Ref<HTMLInputElement>
  click: () => void
}

const Page: React.VFC<Props> = ({ inputRef, click }) => {
  return (
    <Centering direction="column" holizontal="start">
      <Spacer margin="16px">
        <div>Symbol Draw</div>
      </Spacer>
      <TextField text="TransactionHash" inputRef={inputRef} />
      <Button text="START" onClick={click} />
    </Centering>
  )
}

export default Page
