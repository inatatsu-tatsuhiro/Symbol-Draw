import React from 'react'
import styled from '@emotion/styled'
import Spacer from '../components/utils/Spacer'

export type Props = {
  page: React.ReactNode
}
const Layout: React.VFC<Props> = ({ page }) => {
  return (
    <Spacer margin="0px 10vw">
      <Page>{page}</Page>
    </Spacer>
  )
}

export default Layout

const Page = styled('div')`
  height: calc(100vh - 72px - 80px);
  margin-top: 72px;
  margin-bottom: 80px;
  & > div {
    margin-top: 72px;
    padding-bottom: 80px;
  }
`
