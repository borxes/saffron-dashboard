import { Actions, AnyValue, ApplicationTab, FormTab, Tokens, Tuple } from 'models'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'

export const setNight = (payload: boolean) => ({
  type: Actions.SET_NIGHT,
  payload,
})

export const setEthBalance = (payload: string) => ({
  type: Actions.SET_ETH_BALANCE,
  payload,
})

export const setAccount = (payload: string) => ({
  type: Actions.SET_ACCOUNT,
  payload,
})

export const setProvider = (payload: AnyValue) => ({
  type: Actions.SET_PROVIDER,
  payload,
})

export const setTab = (payload: ApplicationTab) => ({
  type: Actions.SET_TAB,
  payload,
})

export const setFormTab = (payload: FormTab) => ({
  type: Actions.SET_FORM_TAB,
  payload,
})

export const setWeb3 = (payload: Web3) => ({
  type: Actions.SET_WEB3,
  payload,
})

export const setAaveBalance = (payload: string) => ({
  type: Actions.SET_TOKEN_BALANCE,
  payload,
})

export const setvPoolBalance = (payload: string) => ({
  type: Actions.SET_VPOOL_BALANCE,
  payload,
})

export const setExchangeRate = (payload: string) => ({
  type: Actions.SET_EXCHANGE_RATE,
  payload,
})

export const setUnderlyingBalance = (payload: string) => ({
  type: Actions.SET_UNDERLYING_BALANCE,
  payload,
})

export const setBorrowRate = (payload: string) => ({
  type: Actions.SET_BORROW_RATE,
  payload,
})

export const setVPool = (payload: Contract) => ({
  type: Actions.SET_VPOOL,
  payload,
})

export const setUtilization = (payload: Tuple) => ({
  type: Actions.SET_UTILIZATION,
  payload,
})

export const setEpoch = (payload: Tuple) => ({
  type: Actions.SET_EPOCH,
  payload,
})
