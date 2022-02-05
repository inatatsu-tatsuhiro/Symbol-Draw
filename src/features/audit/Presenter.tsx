import React, { useEffect, useState } from 'react'
import DropZone from '../../components/elements/DropZone'
import styled from '@emotion/styled'

import { audit, AuditData } from '../../libs/Symbol/Apostille'
// import Button from '../../components/elements/Button'
// import { useI18n } from '../../utils/useI18n'
import Spacer from '../../components/utils/Spacer'
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'

const Page: React.VFC = () => {
  const [file, setFile] = useState<File | null>(null)
  // const { getI18nText } = useI18n()
  const [auditData, setAuditData] = useState<AuditData | null>(null)
  useEffect(() => {
    if (file === null) {
      return
    }
    console.log('audit')
    audit(file).then((r) => {
      console.log('r', r)
      setAuditData(r)
    })
  }, [file])

  if (file === null || auditData === null) {
    return (
      <div>
        <Wrapper>
          <DropZone file={file} setFile={setFile} />
          <Spacer margin="8px"></Spacer>
        </Wrapper>
      </div>
    )
  } else {
    return (
      <div>
        <Wrapper>
          <DropZone file={file} setFile={setFile} />
          <Spacer margin="16px">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}>
                    <TableCell align="right">ApostilleAccount</TableCell>
                    <TableCell align="right">
                      {auditData.apostilleAcount.plain()}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}>
                    <TableCell align="right">SignerAccount</TableCell>
                    <TableCell align="right">
                      {auditData.signer.plain()}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}>
                    <TableCell align="right">TransactionHash</TableCell>
                    <TableCell align="right">{auditData.hash}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}>
                    <TableCell align="right">TimeStamp</TableCell>
                    <TableCell align="right">{auditData.timestamp}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Spacer>
        </Wrapper>
      </div>
    )
  }
}

export default Page

const Wrapper = styled('div')`
  height: 400px;
`
