import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'
import { MdOutlineDeleteForever } from 'react-icons/md'
import Color from '../../../utils/Color'
import { Tooltip } from '@mui/material'

import { useI18n } from '../../../utils/useI18n'

export interface Props {
  file: File | null
  setFile: (file: File | null) => void
}

const Component: React.VFC<Props> = ({ file, setFile }) => {
  const [hover, setHover] = useState(false)
  const { getI18nText } = useI18n()
  const onDrop = useCallback(
    (file) => {
      console.log('file', file)
      setFile(file[0])
    },
    [setFile]
  )
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  if (file !== null) {
    return (
      <Root
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {hover && (
          <SIconButton onClick={() => setFile(null)}>
            <Tooltip title="Delete" placement="top">
              <MdOutlineDeleteForever />
            </Tooltip>
          </SIconButton>
        )}
        <Image src={URL.createObjectURL(file)} alt={file.name} />
      </Root>
    )
  }

  return (
    <Root {...getRootProps()}>
      <input {...getInputProps()} />
      <Text>{getI18nText('component_dropzone')}</Text>
    </Root>
  )
}
export default Component

const Root = styled('div')`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${Color.default};

  border: solid ${Color.grayscale} 1px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`

const Text = styled('div')`
  font-size: 24px;
  color: ${Color.grayscale};
`

const Image = styled('img')`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const SIconButton = styled('div')`
  background: ${Color.default};
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  right: 16px;

  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`
