import {
  Account,
  AggregateTransaction,
  Deadline,
  NetworkType,
  TransferTransaction,
  UInt64,
  RepositoryFactoryHttp,
  PlainMessage,
  TransactionGroup,
  Transaction,
  Address,
} from 'symbol-sdk'

const G_HASH =
  '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const NODE = 'https://sym-test-01.opening-line.jp:3001'
const EPOCH = 1637848847

const master =
  'B060A0B8F871B14062FECE3D7582ECC89D701C397C42B4F4CE25AEE908E1D489'

export const getFile = async (hash: string): Promise<string> => {
  const repositoryFactory = new RepositoryFactoryHttp(NODE)
  const transactionHttp = repositoryFactory.createTransactionRepository()
  return new Promise((resolve) => {
    transactionHttp
      .getTransaction(hash, TransactionGroup.Confirmed)
      .toPromise()
      .then((tx: Transaction) => {
        if (tx instanceof TransferTransaction) {
          const h: string = JSON.parse(tx.message.payload).data
          console.log('tx', h)
          resolve(innerTxJoin(h))
        }
      })
  })
}
const innerTxJoin = async (hash: string): Promise<string> => {
  const repositoryFactory = new RepositoryFactoryHttp(NODE)
  const transactionHttp = repositoryFactory.createTransactionRepository()
  let data = ''

  return new Promise((resolve) => {
    transactionHttp
      .getTransaction(hash, TransactionGroup.Confirmed)
      .toPromise()
      .then((agtx) => {
        console.log(agtx)
        const innerTxs = (agtx as AggregateTransaction).innerTransactions
        for (const inTx of innerTxs) {
          data += (inTx as TransferTransaction).message.payload
        }
        resolve(data)
      })
  })
}

export const saveFile = async (base64img: string): Promise<string> => {
  const signer = Account.createFromPrivateKey(master, NetworkType.TEST_NET)
  const acc = Address.createFromRawAddress(
    'TBNXEEHPLX37CHYORRQRD6LJBQ4JI7EKFNTOH5Y'
  )
  const array: string[] = []
  const MSG_SIZE = 1023
  for (let i = 0; i <= Math.floor(base64img.length / MSG_SIZE); i++) {
    const arr = base64img.slice(i * MSG_SIZE, (i + 1) * MSG_SIZE)
    array.push(arr)
  }
  // console.log('arr', array)

  //===================================================

  const txs = []
  const agtxs = []
  const hashes: string[] = []
  //===================================================

  const repositoryFactory = new RepositoryFactoryHttp(NODE)
  const transactionHttp = repositoryFactory.createTransactionRepository()

  for (let i = 0; i < array.length; i++) {
    // console.log("row", array[i]);
    const inTx = TransferTransaction.create(
      Deadline.create(EPOCH),
      acc,
      [],
      PlainMessage.create(array[i]),
      NetworkType.TEST_NET
    ).toAggregate(signer.publicAccount)

    txs.push(inTx)

    if (i % 100 !== 99 && i !== array.length - 1) {
      continue
    }

    const agtx = AggregateTransaction.createComplete(
      Deadline.create(EPOCH),
      txs,
      NetworkType.TEST_NET,
      [],
      UInt64.fromUint(10000000)
    )

    const signedTx = signer.sign(agtx, G_HASH)

    transactionHttp.announce(signedTx).subscribe(
      (x) => console.log(x),
      (err) => console.error(err)
    )
    agtxs.push(signedTx)
    hashes.push(signedTx.hash)

    console.log('a', signedTx)

    transactionHttp.announce(signedTx).subscribe(
      (x) => console.log(x),
      (err) => console.error(err)
    )
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const data = JSON.stringify({
        version: 1,
        name: 'symbol-draw',
        data: hashes.join(','),
      })

      const a = []
      for (let i = 0; i <= Math.floor(data.length / MSG_SIZE); i++) {
        a.push(data.substr(i * MSG_SIZE, MSG_SIZE))
      }
      const tx = TransferTransaction.create(
        Deadline.create(EPOCH),
        acc,
        [],
        PlainMessage.create(data),
        NetworkType.TEST_NET,
        UInt64.fromUint(2000000)
      )

      const st = signer.sign(tx, G_HASH)

      transactionHttp.announce(st).subscribe(
        (x) => console.log(x),
        (err) => console.error(err)
      )
      resolve(st.hash)
    }, 1000)
  })
}
