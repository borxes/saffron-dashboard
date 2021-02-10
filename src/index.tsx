import React from 'react'
import ReactDOM from 'react-dom'
import '@fontsource/public-sans'
import '@fontsource/inter'

import App from './App'
import { ErrorBoundary } from 'components/ErrorBoundary'
import { StateContextProvider } from 'state'

ReactDOM.render(
  <ErrorBoundary>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
