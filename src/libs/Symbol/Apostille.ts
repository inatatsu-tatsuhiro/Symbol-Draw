import { format } from 'date-fns'
// import config from 'utils/config/SymbolConfig'
import * as fileReader from 'promise-file-reader'
import {
  ApostilleTransaction,
  AuditService,
  HashFunctionCreator,
  HashingType,
  IApostilleOptions,
  IAuditResult,
  IPartialTxAuditResult,
} from 'simple-apostille-v2'
import {
  Account,
  SignedTransaction,
  RepositoryFactoryHttp,
  TransactionService,
  Address,
} from 'symbol-sdk'

const apiEndpoint = 'https://sym-test-01.opening-line.jp:3001' //config.SYMBOL_API_ENDPOINT
const generationHash =
  '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836' //config.GENERATION_HASH_SEED
const feeMultiplier = 200 //config.FEE_MULTIPLIER
const epochAdjustment = 1637848847 //config.EPOCH_ADJUSTMENT
const networkType = 152 //config.NETWORK_TYPE

export type AuditData = {
  signer: Address
  apostilleAcount: Address
  hash: string
  status: number
  timestamp: string
}

export const getApostilleFileName = (
  fileName: string,
  txHash: string
): string => {
  const date = format(new Date(), 'yyyy-MM-dd')
  const [fn, ext] = fileName.split('.')
  const apostilleFileName = `${fn} -- Apostille TX ${txHash} -- ${date}.${ext}`
  return apostilleFileName
}

export const getFileHash = async (file: File): Promise<string> => {
  const fileBuffer = await fileReader.readAsArrayBuffer(file)
  const hashFunc = HashFunctionCreator.create(HashingType.Type.sha256)
  return hashFunc.hashing(fileBuffer)
}

const createAnnounceInfo = async (
  hashedData: string,
  fileName: string,
  signer: Account
) => {
  const salt = String(new Date().getTime())
  const apostilleTx = ApostilleTransaction.createFromHashedData(
    hashedData,
    HashingType.Type.sha256,
    salt + fileName,
    signer,
    networkType,
    generationHash,
    feeMultiplier,
    apiEndpoint,
    epochAdjustment
  )

  return await apostilleTx.singedTransactionAndAnnounceType()
}

export const createApostilleTransaction = async (
  file: File,
  signer: Account
): Promise<unknown> => {
  if (file === null || signer === null) return
  try {
    const fileHash = await getFileHash(file)
    const announceInfo = await createAnnounceInfo(fileHash, file.name, signer)
    if (announceInfo) {
      return announceTransactionByComplete(announceInfo.signedTransaction)
    }
  } catch (err) {
    console.log('err:', err)
    return err
  }
}

const createRepositoryFactory = () => {
  return new RepositoryFactoryHttp(apiEndpoint, {
    generationHash,
    networkType,
    websocketUrl: `${apiEndpoint.replace('http', 'ws')}/ws`,
    websocketInjected: WebSocket,
  })
}
const createTransactionService = () => {
  const repositoryFactory = createRepositoryFactory()
  return new TransactionService(
    repositoryFactory.createTransactionRepository(),
    repositoryFactory.createReceiptRepository()
  )
}

const createListener = () => {
  const repositoryFactory = createRepositoryFactory()
  return repositoryFactory.createListener()
}

const announceTransactionByComplete = async (signedTx: SignedTransaction) => {
  return new Promise((resolve, reject) => {
    const transactionService = createTransactionService()
    const listener = createListener()

    if (transactionService && listener) {
      listener
        .open()
        .then(() => {
          transactionService.announce(signedTx, listener).subscribe(
            (x) => {
              listener.close()
              console.log('complate')
              resolve(x)
            },
            (err) => {
              listener.close()
              console.log('err:', err)
              reject(err)
            }
          )
        })
        .catch((err) => {
          console.log('err:', err)
          reject(err)
        })
    }
  })
}
const createOption = (title: string): IApostilleOptions => {
  return {
    metadata: {
      title: title,
    },
  }
}

const getTxHash = (filename: string): string => {
  const regexp = /--\sApostille\sTX\s(\w+)\s--/
  const match = filename.match(regexp)
  if (match === null || match.length < 1) {
    console.log('not match')
    return ''
  } else {
    console.log('match')
    return match[1]
  }
}

const getValidStatus = (r: IAuditResult | IPartialTxAuditResult): number => {
  if (r.isValid) {
    if (r.type === 0) return 0
    if (r.type === 1) return 1
  }
  return -1
}

export const audit = async (file: File): Promise<AuditData> => {
  const fileBuf = await fileReader.readAsArrayBuffer(file)
  const hash = getTxHash(file.name)
  return new Promise((resolve, reject) => {
    AuditService.audit(fileBuf, hash, apiEndpoint)
      .then((r) => {
        if (!r.signer || !r.apostilleAccount) {
          // setOpen(true)
          console.log('reject', r)
          reject()
        } else {
          const status = getValidStatus(r)
          const t: string =
            JSON.parse(JSON.stringify(r)).timestamp.split('.')[0] || ''
          resolve({
            signer: r.signer,
            apostilleAcount: r.apostilleAccount,
            hash: hash,
            status: status,
            timestamp: t,
          })
        }
      })
      .catch((e) => {
        console.error('ERROR')
        console.error(e)
        reject()
        // setOpen(true)
      })
  })
}
