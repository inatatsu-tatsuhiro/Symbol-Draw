import React from 'react'
import styled from '@emotion/styled'

import { AppBar, Box, Toolbar } from '@mui/material'
import Color from '../../../utils/Color'
import Button from '../Button'
import Space from '../../utils/Spacer'

export interface Props {
  navi: (path: string) => void
}

const Component: React.VFC<Props> = ({ navi }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SAppBar position="static" color="default">
        <Toolbar>
          <Logo onClick={() => navi('/')}>
            <div>Symbol</div>
            <div>Draw</div>
          </Logo>
          <Box sx={{ flexGrow: 1 }} />
          <Space margin="4px">
            <Button
              text={'AUDIT'}
              onClick={() => {
                navi('/audit')
              }}
            />
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
