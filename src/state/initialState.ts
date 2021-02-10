import { State, ApplicationTab, FormTab, Tuple, TUPLE_ZERO } from 'models'

export const INITIAL_STATE: State = {
  account: '',
  provider: undefined,
  ethBalance: '',
  night: false,
  currentTab: ApplicationTab.DASHBOARD,
  formTab: FormTab.BORROW,
  web3: undefined,
  vPool: undefined,
  aaveBalance: '',
  vpoolBalance: '',
  exchangeRate: '',
  underlyingBalance: '',
  borrowRate: '',
  utilization: TUPLE_ZERO,
  epoch: TUPLE_ZERO,
}
