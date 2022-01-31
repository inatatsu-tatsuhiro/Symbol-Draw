import { Box, Typography } from '@mui/material'
import React, { Ref } from 'react'
import styled from '@emotion/styled'
import Button from '../../components/elements/Button'
import TextField from '../../components/elements/TextField'
import Centering from '../../components/utils/Centering'
import Spacer from '../../components/utils/Spacer'
import { useI18n } from '../../utils/useI18n'

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
  const { getI18nText } = useI18n()
  return (
    <Centering direction="column" holizontal="start">
      <Spacer margin="8px">
        <Typography variant="h4" component="div">
          Art Chain
        </Typography>
        <Typography variant="body1" component="div">
          {getI18nText('description_artchaining')}
        </Typography>
      </Spacer>
      <TextField text="TransactionHash" inputRef={inputRef} />

      <Spacer margin="4px 16px">
        <Wrapper>
          <Box sx={{ flexGrow: 1 }} />
          <Spacer margin="0px 8px">
            <Button
              text="Re Chain With TRANSACTION Hash"
              onClick={openCanvasWithHash}
            />
          </Spacer>
          <Spacer margin="0px 8px">
            <Button text="Create Chain" onClick={openCanvas} />
          </Spacer>
        </Wrapper>
      </Spacer>
      <Spacer margin="8px">
        <Typography variant="h4" component="div">
          ?????
        </Typography>
        <Typography variant="body1" component="div">
          Coming soon .....
        </Typography>
      </Spacer>

      <Spacer margin="4px 16px"></Spacer>
    </Centering>
  )
}

export default Page

const Wrapper = styled('div')`
  display: flex;
`
