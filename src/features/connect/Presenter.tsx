import { Box } from '@mui/material'
import styled from '@emotion/styled'

import React, { useRef, useState } from 'react'
import TextField from '../../components/elements/TextField'
import Button from '../../components/elements/Button'

import Centering from '../../components/utils/Centering'
import Spacer from '../../components/utils/Spacer'
import {
  Account,
  AggregateTransaction,
  Deadline,
  KeyGenerator,
  Metadata,
  MetadataType,
  MosaicId,
  MosaicMetadataTransaction,
  RepositoryFactoryHttp,
  UInt64,
  Page,
} from 'symbol-sdk'
import { getFile } from '../../libs/Symbol/ImageIO'
import { usePrikey } from '../../utils/PrikeyContext'

const apiEndpoint = 'https://sym-test-01.opening-line.jp:3001' //config.SYMBOL_API_ENDPOINT
const generationHash =
  '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836' //config.GENERATION_HASH_SEED
// const feeMultiplier = 200 //config.FEE_MULTIPLIER
const epochAdjustment = 1637848847 //config.EPOCH_ADJUSTMENT
const networkType = 152 //config.NETWORK_TYPE

const MPage: React.VFC = () => {
  const txHashRef = useRef<HTMLInputElement>(null)
  const mosaicRef = useRef<HTMLInputElement>(null)
  const checkRef = useRef<HTMLInputElement>(null)

  const [mosaicId, setMosaicId] = useState('')

  const [illustMosaic, setIllustMosaic] = useState('')
  const check = () => {
    if (checkRef === null || checkRef.current === null) {
      return
    }
    const mid = new MosaicId(checkRef.current.value)
    console.log('mid', mid)
    setMosaicId(checkRef.current.value)

    const repositoryFactory = new RepositoryFactoryHttp(apiEndpoint)
    const metadataHttp = repositoryFactory.createMetadataRepository()

    const searchCriteria = {
      targetId: mid,
      metadataType: MetadataType.Mosaic,
    }
    metadataHttp.search(searchCriteria).subscribe(
      (metadataEntries: Page<Metadata>) => {
        if (metadataEntries.pageSize > 0) {
          console.log('Page', metadataEntries.pageNumber)
          metadataEntries.data.forEach((entry: Metadata) => {
            const metadataEntry = entry.metadataEntry
            console.log('Key:\t', metadataEntry.scopedMetadataKey.toHex())
            if (
              metadataEntry.scopedMetadataKey.toHex() === 'F5CC2D09ED048388'
            ) {
              console.log('Value:\t', metadataEntry.value)
              getFile(metadataEntry.value).then((data) => {
                setIllustMosaic(data)
              })
            }
          })
        } else {
          console.log('\n The mosaic does not have metadata entries assigned.')
        }
      },
      (err) => console.log(err)
    )
  }
  const cx = usePrikey()
  const link = () => {
    if (
      mosaicRef === null ||
      mosaicRef.current === null ||
      txHashRef === null ||
      txHashRef.current === null
    ) {
      return
    }

    if (cx === undefined) return

    const pk = cx.prikey

    const acc = Account.createFromPrivateKey(pk, networkType)

    const key = KeyGenerator.generateUInt64Key('CERT')
    const mid = mosaicRef.current.value
    const value = txHashRef.current.value

    const metadataTransaction = MosaicMetadataTransaction.create(
      Deadline.create(epochAdjustment),
      acc.address,
      key,
      new MosaicId(mid),
      value.length,
      value,
      networkType
    )

    const aggregateTransaction = AggregateTransaction.createComplete(
      Deadline.create(epochAdjustment),
      [metadataTransaction.toAggregate(acc.publicAccount)],
      networkType,
      [],
      UInt64.fromUint(2000000)
    )

    const signedTx = acc.sign(aggregateTransaction, generationHash)

    const repositoryFactory = new RepositoryFactoryHttp(apiEndpoint)
    const transactionHttp = repositoryFactory.createTransactionRepository()

    transactionHttp.announce(signedTx).subscribe(
      (x) => console.log(x),
      (err) => console.error(err)
    )
  }
  return (
    <Root>
      <Centering direction="column" holizontal="start">
        <Spacer margin="8px"></Spacer>
        <TextField text="TxHash" inputRef={txHashRef} />
        <Spacer margin="8px"></Spacer>
        <TextField text="MosaicID" inputRef={mosaicRef} />
        <Wrapper>
          <Box sx={{ flexGrow: 1 }} />
          <Spacer margin="8px">
            <Button text="LINK" onClick={link} />
          </Spacer>
        </Wrapper>
        <Spacer margin="32px"></Spacer>
        <TextField text="MosaicID" inputRef={checkRef} />
        <Wrapper>
          <Box sx={{ flexGrow: 1 }} />
          <Spacer margin="8px">
            <Button text="CHECK" onClick={check} />
          </Spacer>
        </Wrapper>
      </Centering>
      {illustMosaic !== '' && (
        <MosaicCard>
          <Text>MosaicID: {mosaicId}</Text>
          <Img
            src={illustMosaic}
            width="500px"
            height="500px"
            alt="ilustmosaic"
          />
        </MosaicCard>
      )}
    </Root>
  )
}

export default MPage
const Wrapper = styled('div')`
  display: flex;
`

const Root = styled('div')`
  display: flex;
  flex-direction: column;
`

const MosaicCard = styled('div')`
  border: 1px solid #b429f9;
  border-radius: 16px;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled('div')`
  font-size: 48px;
`

const Img = styled('img')`
  border: 1px solid black;
`
