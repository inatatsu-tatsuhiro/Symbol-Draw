import { Box, Modal, Typography } from '@mui/material'
import React, { Ref, useEffect, useState } from 'react'
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
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Centering direction="column" holizontal="start">
      <Spacer margin="8px">
        <Typography variant="h4" component="div">
          Art Chain
        </Typography>
      </Spacer>
      <Wrapper>
        <Spacer margin="8px">
          <ButtonArea onClick={openCanvas}>
            <Typography variant="h3" component="div">
              NewGame
            </Typography>
          </ButtonArea>
        </Spacer>
        <Spacer margin="8px">
          <ButtonArea onClick={() => setOpen(true)}>
            <Typography variant="h3" component="div">
              Continue
            </Typography>
          </ButtonArea>
        </Spacer>
        <Modal open={open} onClose={closeModal}>
          <ModalContent>
            <Typography variant="h5" component="div">
              Continue Transaction Hash
            </Typography>
            <TFWrapper>
              <Spacer margin="32px">
                <TextField text="TransactionHash" inputRef={inputRef} />
              </Spacer>
            </TFWrapper>
            <Button text={'start'} onClick={openCanvasWithHash}></Button>
          </ModalContent>
        </Modal>
      </Wrapper>
    </Centering>
  )
}

export default Page

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`

const ButtonArea = styled('div')({
  width: '16vw',
  height: '9vw',
  background: '#dedede',
  margin: '64px 5vw',
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const ModalContent = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '50vw',
  transform: 'translate(-50%, -50%)',
  padding: '16px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
})

const TFWrapper = styled('div')({
  width: '100%',
})
