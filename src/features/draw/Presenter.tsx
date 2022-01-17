import Konva from 'konva'
import React from 'react'
import Canvas from '../../components/elements/Canvas'

import { getFile, saveFile } from '../../libs/Symbol/ImageIO'

import ShareModal from '../../components/elements/ShareModal'

export interface Props {
  hash: string
}

const Page: React.VFC<Props> = ({ hash }) => {
  const [image, setImage] = React.useState<HTMLImageElement>(new Image())
  const stageRef = React.useRef<Konva.Stage | null>(null)

  const [open, setOpen] = React.useState(false)
  const [txHash, setTxHash] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const save = () => {
    if (stageRef.current === null) return
    const img = stageRef.current.toDataURL()
    console.log(img)
    saveFile(img, 'draw-chain', hash).then((h) => setTxHash(h))
    setOpen(true)
  }
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

  return (
    <div>
      <Canvas saveFile={save} stageRef={stageRef} image={image} />
      <ShareModal open={open} setOpen={setOpen} txHash={txHash} />
    </div>
  )
}

export default Page
