import React from 'react'

import { Actions, Dispatch, State } from 'models'
import { reducer } from './reducer'

import { INITIAL_STATE } from './initialState'

const StateContext = React.createContext<State | undefined>(undefined)

const DispatchContext = React.createContext<Dispatch | undefined>(undefined)

function StateContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(StateContext)

  if (context === undefined) {
    throw new Error('useAppState context is missing')
  }

  return context
}

function useSelector<T>(fn: (state: State) => T) {
  const context = React.useContext(StateContext)

  if (context === undefined) {
    throw new Error('useSelector context is missing')
  }

  return fn(context)
}

function useDispatch() {
  const context = React.useContext(DispatchContext)

  if (context === undefined) {
    throw new Error('useDispatch context is missing')
  }

  return context
}

export { StateContextProvider, useDispatch, useAppState, Actions, useSelector }
