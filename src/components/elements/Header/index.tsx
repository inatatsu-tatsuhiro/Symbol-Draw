import React, { useRef } from 'react'
import styled from '@emotion/styled'

import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import Color from '../../../utils/Color'
import Button from '../Button'
import TextField from '../TextField'
import Space from '../../utils/Spacer'

import MButton from '@mui/material/Button'

import { useI18n } from '../../../utils/useI18n'
import { usePrikey } from '../../../utils/PrikeyContext'
import { Account, Address, NetworkType } from 'symbol-sdk'
import { BsDownload } from 'react-icons/bs'

export interface Props {
  navi: (path: string) => void
}

const Component: React.VFC<Props> = ({ navi }) => {
  const { lang, selectEn, selectJa } = useI18n()

  const inputRef = useRef<HTMLInputElement>(null)

  const submit = () => {
    if (inputRef === null || inputRef.current === null) {
      return
    }
    navi(`/canvas/${inputRef.current.value}`)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SAppBar position="static" color="default">
        <Toolbar>
          <Logo onClick={() => navi('/')}>
            <div>Symbol</div>
            <div>Draw</div>
          </Logo>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <TextField inputRef={inputRef} text="TxHash" />
            <Space margin="8px">
              <IconButton component="span" onClick={submit}>
                <BsDownload />
              </IconButton>
            </Space>
          </Search>
          <Space margin="0px 40px">
            {lang === 'ja' ? (
              <MButton onClick={selectEn}>{lang}</MButton>
            ) : (
              <MButton onClick={selectJa}>{lang}</MButton>
            )}
          </Space>
        </Toolbar>
      </SAppBar>
    </Box>
  )
}

export default Component

const SAppBar = styled(AppBar)`
  box-shadow: 0px 0px 0px 0px white;
  box-sizing: border-box;
  height: 64px;
  background: white !important;
  border-bottom: solid 1px ${Color.grayscale};
  box-shadow: none !important;
`

const Logo = styled('div')`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Search = styled('div')({
  width: '600px',
  display: 'flex',
  justifyContent: 'space-between',
})
