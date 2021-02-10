import { AnyValue, Tuple } from './general.model'
import { ApplicationTab, FormTab } from './app.model'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'

export interface State {
  account: string
  ethBalance: string
  provider: AnyValue
  night: boolean
  currentTab: ApplicationTab
  formTab: FormTab
  web3: Web3 | undefined
  vPool: Contract | undefined
  aaveBalance: string
  vpoolBalance: string
  exchangeRate: string
  underlyingBalance: string
  borrowRate: string
  utilization: Tuple
  epoch: Tuple
}
