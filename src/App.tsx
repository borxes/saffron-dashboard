import React from 'react'
import { Box, Container } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from 'components/Header'
import { Separator, BottomSeparator } from 'components/Separator'
import Tabs from 'components/Tabs'
import Balances from 'components/Balances'

import { useTokenBalance } from 'hooks'
import { useAppState } from 'state'
import { ApplicationTab } from 'models'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#1D1D1D',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Public Sans'].join(','),
    caption: {
      fontSize: 14,
    },
  },
})

const useStyles = makeStyles({
  root: {
    // display: 'flex',
    height: '100%',
  },
})

function App() {
  const styles = useStyles()
  const { currentTab } = useAppState()
  useTokenBalance()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.root}>
        <Container>
          <Header />
        </Container>
        <Separator />
        <Container>
          <Tabs />
          {/* {currentTab === ApplicationTab.DASHBOARD ? <Dashboard />: <Balances />} */}
          <Balances />
        </Container>
        <BottomSeparator />
      </Box>
    </MuiThemeProvider>
  )
}

export default App
