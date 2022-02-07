import Konva from 'konva'
import React, { useState } from 'react'
import Canvas from '../../components/elements/Canvas'

import { getFile, saveFile } from '../../libs/Symbol/ImageIO'

import ShareModal from '../../components/elements/ShareModal'
import styled from '@emotion/styled'
import { Modal, Paper, Typography } from '@mui/material'
import { usePrikey } from '../../utils/PrikeyContext'

export interface Props {
  hash: string
}

const Page: React.VFC<Props> = ({ hash }) => {
  const [image, setImage] = React.useState<HTMLImageElement>(new Image())
  const stageRef = React.useRef<Konva.Stage | null>(null)

  const [open, setOpen] = React.useState(false)
  const [openPM, setOpenPM] = React.useState(false)
  const [txHash, setTxHash] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const context = usePrikey()

  const save = () => {
    setLoading(true)
    if (stageRef.current === null) return
    if (context === undefined) return
    const img = stageRef.current.toDataURL()
    console.log(img)
    saveFile(img, 'draw-chain', context.prikey, hash).then((h) => {
      setTxHash(h)
      setLoading(false)
      setOpen(true)
    })
  }
  const [loading, setLoading] = useState(false)
  React.useEffect(() => {
    if (hash === '') {
      console.log('new game')
      setIsLoading(false)
      return
    }
    console.log('import:', hash)
    getFile(hash)
      .then((img) => {
        setIsLoading(false)
        const i = new Image()
        i.src = img
        setImage(i)
      })
      .catch(() => {
        console.log('dame')
        setError(true)
      })
  }, [hash])

  if (error) {
    return <div>NotFound This Transaction</div>
  }

  if (isLoading) {
    return <div>GetTransaction....</div>
  }

  const sharePrev = () => {
    setOpenPM(true)
  }

  return (
    <div>
      <Canvas
        saveFile={save}
        stageRef={stageRef}
        image={image}
        sharePrev={sharePrev}
      />
      <ShareModal open={open} setOpen={setOpen} txHash={txHash} />
      <ShareModal open={openPM} setOpen={setOpenPM} txHash={hash} />
      <Modal open={loading}>
        <SPaper>
          <Typography variant="h4" component="div">
            Create Art...
          </Typography>
        </SPaper>
      </Modal>
    </div>
  )
}

export default Page

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
