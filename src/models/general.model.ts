import { Actions, State } from '.'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyValue = any

interface Action<T = AnyValue> {
  type: Actions
  payload?: T
}

type Dispatch = (arg0: Action) => void

type MappedReducerFunctions = Map<Actions, (state: State, action: Action) => State>

type Maybe<T> = T | undefined

type MaybeNull<T> = Maybe<T> | null

type Either<T, K> = T | K

interface Result {
  isOK: boolean
  payload?: unknown
}

interface Tuple {
  '0': string
  '1': string
}

export type { AnyValue, Result, Action, Maybe, MaybeNull, Either, Dispatch, MappedReducerFunctions, Tuple }
