import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { useAppState } from 'state'
import Logo from 'components/Icons/Logo'
import WalletConnector from 'components/WalletConnector'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
  },
  title: {
    marginLeft: '11px',
    fontSize: '18px',
  },
  address: {
    marginRight: '1rem',
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const Header = () => {
  const classes = useStyles()
  const { account } = useAppState()
  return (
    <Box className={classes.root} alignItems="center">
      <Box display="flex" flexDirection="row">
        <Logo />
        <Typography color="textPrimary" className={classes.title}>
          SFI Dashboard
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
        <Typography color="textPrimary" className={classes.address}>
          {account}
        </Typography>
        <WalletConnector />
      </Box>
    </Box>
  )
}

export default Header
