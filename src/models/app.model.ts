export enum ApplicationTab {
  DASHBOARD = 'dashboard',
  BALANCES = 'balances',
}

export enum FormTab {
  BORROW = 'borrow',
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export enum Tokens {
  AAVE = 'aave',
  STK_AAVE = 'stkaave',
}

export interface TokenBalance {
  token: Tokens
  balance: string
}

export type TokenBalances = TokenBalance[]

export interface LoanInfo {
  _borrower: string
  _loanPool: string
  _amount: string
  _underlying: string
  _feesAmount: string
  _feesUsed: string
  _closed: boolean
}
