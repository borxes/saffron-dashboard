import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useAppState } from 'state'
import { useWeb3Modal } from 'hooks'
import GreenEllipse from 'components/Icons/GreenEllipse'
import Ellipse from 'components/Icons/Ellipse'
import ConnectButton from 'components/Buttons/ConnectButton'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const WalletConnector = () => {
  const { account } = useAppState()
  const { onConnect, onDisconnect } = useWeb3Modal()
  const classes = useStyles()
  return (
    <ConnectButton
      size="small"
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={account ? <GreenEllipse /> : <Ellipse />}
      onClick={account ? onDisconnect : onConnect}
    >
      {account ? 'Disconnect' : 'Connect a wallet'}
    </ConnectButton>
  )
}

export default WalletConnector
