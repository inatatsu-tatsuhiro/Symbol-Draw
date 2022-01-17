import { Modal, Paper, Typography } from '@mui/material'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { BiCopyAlt } from 'react-icons/bi'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
import styled from '@emotion/styled'
import React, { Dispatch } from 'react'
import Spacer from '../../utils/Spacer'
import { IconContext } from 'react-icons/lib'

import { useI18n } from '../../../utils/useI18n'

export type Props = {
  open: boolean
  setOpen: Dispatch<boolean>
  txHash: string
}
const baselink = 'http://localhost'
const Component: React.VFC<Props> = ({ open, setOpen, txHash }) => {
  const { getI18nText } = useI18n()

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <SPaper>
        <Typography variant="h6" component="div">
          {getI18nText('invite')}
        </Typography>
        <FlexCol>
          <TwitterShareButton url={`${baselink}/canvas/${txHash}`}>
            <Wrapper>
              <IconContext.Provider value={{ size: '32px' }}>
                <BsTwitter />
              </IconContext.Provider>
              <Spacer MLeft="16px">
                <Typography variant="h4" component="div">
                  {getI18nText('share_twitter')}
                </Typography>
              </Spacer>
            </Wrapper>
          </TwitterShareButton>
          <FacebookShareButton url={`${baselink}/canvas/${txHash}`}>
            <Wrapper>
              <IconContext.Provider value={{ size: '32px' }}>
                <BsFacebook />
              </IconContext.Provider>
              <Spacer MLeft="16px">
                <Typography variant="h4" component="div">
                  {getI18nText('share_facebook')}
                </Typography>
              </Spacer>
            </Wrapper>
          </FacebookShareButton>
          <ClickArea>
            <Wrapper>
              <IconContext.Provider value={{ size: '32px' }}>
                <BiCopyAlt />
              </IconContext.Provider>
              <Spacer MLeft="16px">
                <Typography variant="h4" component="div">
                  {getI18nText('share_clipboard')}
                </Typography>
              </Spacer>
            </Wrapper>
          </ClickArea>
        </FlexCol>
      </SPaper>
    </Modal>
  )
}

export default Component
const SPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, -50%);
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexCol = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 4px 8px;
`

const ClickArea = styled('div')``
