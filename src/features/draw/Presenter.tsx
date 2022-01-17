import Konva from 'konva'
import React from 'react'
import Canvas from '../../components/elements/Canvas'

import { getFile, saveFile } from '../../libs/Symbol'

import ShareModal from '../../components/elements/ShareModal'

export interface Props {
  hash: string
}

const Page: React.VFC<Props> = ({ hash }) => {
  const [image, setImage] = React.useState<HTMLImageElement>(new Image())
  const stageRef = React.useRef<Konva.Stage | null>(null)

  const [open, setOpen] = React.useState(false)
  const [txHash, setTxHash] = React.useState('')

  const save = () => {
    if (stageRef.current === null) return
    const img = stageRef.current.toDataURL()
    console.log(img)
    saveFile(img).then((h) => setTxHash(h))
    setOpen(true)
  }
  React.useEffect(() => {
    if (hash === '') return
    getFile(hash).then((img) => {
      const i = new Image()
      i.src = img
      setImage(i)
    })
  }, [hash])
  return (
    <div>
      <Canvas saveFile={save} stageRef={stageRef} image={image} />
      <ShareModal open={open} setOpen={setOpen} txHash={txHash} />
    </div>
  )
}

export default Page
