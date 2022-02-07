import React, { useRef } from 'react'
import styled from '@emotion/styled'

import { AppBar, Box, Toolbar } from '@mui/material'
import Color from '../../../utils/Color'
import Button from '../Button'
import TextField from '../TextField'
import Space from '../../utils/Spacer'

import MButton from '@mui/material/Button'

import { useI18n } from '../../../utils/useI18n'
import { usePrikey } from '../../../utils/PrikeyContext'
import { Account, Address, NetworkType } from 'symbol-sdk'

export interface Props {
  navi: (path: string) => void
}

const Component: React.VFC<Props> = ({ navi }) => {
  const { lang, selectEn, selectJa } = useI18n()
  const cx = usePrikey()

  const getAddr = () => {
    if (cx === undefined) return ''
    try {
      const acc = Account.createFromPrivateKey(cx.prikey, NetworkType.TEST_NET)
      if (acc.address.plain() === 'TDEC5VUUAUYHKI2Y45WBDMGODAS42P3PPCTMGUY')
        return 'GEST'
      return acc.address.plain()
    } catch {
      return '404'
    }
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
          <Space margin="4px">{getAddr()}</Space>
          <Space margin="0px 40px">
            {lang === 'ja' ? (
              <MButton onClick={selectEn}>{lang}</MButton>
            ) : (
              <MButton onClick={selectJa}>{lang}</MButton>
            )}
          </Space>
          <Space margin="4px">
            <Button
              text={'CONNECT'}
              onClick={() => {
                navi('/connect')
              }}
            />
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
