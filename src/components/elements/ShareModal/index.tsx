import React, { Dispatch, useState } from 'react'
import { List, ListItem, Modal, Paper, Typography } from '@mui/material'

import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { BiCopyAlt } from 'react-icons/bi'
import { FaFileDownload } from 'react-icons/fa'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
import styled from '@emotion/styled'
import Spacer from '../../utils/Spacer'
import { IconContext } from 'react-icons/lib'

import { useI18n } from '../../../utils/useI18n'
import {
  getApoFile,
  getApostilleFile,
  getFile,
} from '../../../libs/Symbol/ImageIO'
import { Account, NetworkType, AggregateTransaction } from 'symbol-sdk'
import {
  createApostilleTransaction,
  getApostilleFileName,
} from '../../../libs/Symbol/Apostille'

export type Props = {
  open: boolean
  setOpen: Dispatch<boolean>
  txHash: string
}
const baselink = 'https://inatatsu-tatsuhiro.github.io/SymbolDraw'
const master =
  '891D9D7E9672925123CFB7766CE9AC740BAFED43AE78F64CE2D296F54E62E57A'
const Component: React.VFC<Props> = ({ open, setOpen, txHash }) => {
  const { getI18nText } = useI18n()
  const [loading, setLoading] = useState(false)
  const copy = React.useCallback(() => {
    navigator.clipboard.writeText(txHash)
  }, [txHash])

  const apostille = () => {
    // setLoading(true)
    console.log('apostille')
    getFile(txHash).then((img) => {
      console.log(img)
      const buf = Buffer.from(img, 'base64')
      const f = new File([buf.buffer], 'symbol-draw.png', {
        type: 'image/png',
      })
      console.log('file', f)
      const a = document.createElement('a')
      a.href = img
      a.download = f.name
      a.click()
      // const signer = Account.createFromPrivateKey(master, NetworkType.TEST_NET)
      // createApostilleTransaction(f, signer)
      //   .then((result) => {
      //     if (!(result instanceof AggregateTransaction)) {
      //       return
      //     }

      //     if (!result.transactionInfo) {
      //       return
      //     }
      //     if (!result.transactionInfo.hash) {
      //       return
      //     }
      //     console.log('result', result)
      //     const hash = result.transactionInfo.hash
      //     const fn = getApostilleFileName(f.name, hash)
      //   })
      //   .finally(() => {
      //     setLoading(false)
      //   })
    })
    // getApoFile(txHash).then((imgs) => {
    //   console.log(imgs)
    //   // const bufs = Buffer.from(img, 'base64')
    //   // console.log('bufs', bufs)
    // })
  }
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <SPaper>
        <Typography variant="h6" component="div">
          {getI18nText('invite')}
        </Typography>
        <List>
          <ListItem button>
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
          </ListItem>
          <ListItem button>
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
          </ListItem>
          <ListItem button>
            <Wrapper onClick={copy}>
              <IconContext.Provider value={{ size: '32px' }}>
                <BiCopyAlt />
              </IconContext.Provider>
              <Spacer MLeft="16px">
                <Typography variant="h4" component="div">
                  {getI18nText('share_clipboard')}
                </Typography>
              </Spacer>
            </Wrapper>
          </ListItem>
          <ListItem button>
            <Wrapper onClick={apostille}>
              <IconContext.Provider value={{ size: '32px' }}>
                <FaFileDownload />
              </IconContext.Provider>
              <Spacer MLeft="16px">
                <Typography variant="h4" component="div">
                  {getI18nText('share_download')}
                </Typography>
              </Spacer>
            </Wrapper>
          </ListItem>
        </List>
        <Modal open={loading}>
          <SPaper>
            <Typography variant="h4" component="div">
              Create Apostille...
            </Typography>
          </SPaper>
        </Modal>
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

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 4px 8px;
`
