import { Actions, Action, State } from 'models'

import { logState } from 'toolbelt'

function reducer(state: State, action: Action) {
  // needed to log it all at once before return
  let result = state

  switch (action.type) {
    case Actions.SET_ACCOUNT:
      result = { ...state, account: action.payload }
      break
    case Actions.SET_PROVIDER:
      result = { ...state, provider: action.payload }
      break
    case Actions.SET_NIGHT:
      result = { ...state, night: action.payload }
      break
    case Actions.SET_ETH_BALANCE:
      result = { ...state, ethBalance: action.payload }
      break
    case Actions.SET_TAB:
      result = { ...state, currentTab: action.payload }
      break
    case Actions.SET_FORM_TAB:
      result = { ...state, formTab: action.payload }
      break
    case Actions.SET_WEB3:
      result = { ...state, web3: action.payload }
      break
    case Actions.SET_VPOOL:
      result = { ...state, vPool: action.payload }
      break
    case Actions.SET_TOKEN_BALANCE:
      result = { ...state, aaveBalance: action.payload }
      break
    case Actions.SET_VPOOL_BALANCE:
      result = { ...state, vpoolBalance: action.payload }
      break
    case Actions.SET_EXCHANGE_RATE:
      result = { ...state, exchangeRate: action.payload }
      break
    case Actions.SET_UNDERLYING_BALANCE:
      result = { ...state, underlyingBalance: action.payload }
      break
    case Actions.SET_BORROW_RATE:
      result = { ...state, borrowRate: action.payload }
      break
    case Actions.SET_UTILIZATION:
      result = { ...state, utilization: action.payload }
      break
    case Actions.SET_EPOCH:
      result = { ...state, epoch: action.payload }
      break
    default:
      console.error(`Wrong Action: ${JSON.stringify(action)}`)
  }

  if (process.env.NODE_ENV === 'development') logState(state, action, result)

  return result
}

export { reducer }
