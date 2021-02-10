import { State, Action } from 'models'

function logState(state: State, action: Action, result: State) {
  const { groupCollapsed, groupEnd, info, log } = console

  groupCollapsed('%c[ACTION]', 'background-color: lemonchiffon;padding: 2px 8px; border-radius: 2px', action.type)
  log(
    '%c[previous state]',

    'color: royalblue',
    state
  )

  info('%caction', 'font-style: italic', action)
  log('%c[next state]', 'color: darkorchid', result)

  groupEnd()
}

export { logState }
