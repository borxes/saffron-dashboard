import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { useAppState } from 'state'
import { getAavePrice, weiToNum } from 'toolbelt'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '260px',
    color: '#E88C28',
  },
  title: {
    fontWeight: 100,
    fontSize: 14,
    lineHeight: '16px',
  },
  usd: {
    marginLeft: '0.5rem',
  },
  balance: {
    fontWeight: 100,
    fontSize: 48,
    lineHeight: '56px',
    display: 'inline',
  },
}))

const SupplyBalance = () => {
  const styles = useStyles()
  const { underlyingBalance } = useAppState()
  const [aavePrice, setAavePrice] = React.useState('')

  React.useEffect(() => {
    getAavePrice().then((res) => setAavePrice(res))
  }, [])

  const supplyValue = aavePrice ? parseFloat(aavePrice) * parseFloat(weiToNum(underlyingBalance)) : 0

  return (
    <Box className={styles.root}>
      <Typography className={styles.title} align="center">
        SUPPLY BALANCE
      </Typography>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography className={styles.balance}>${supplyValue}</Typography>
        <Typography className={clsx(styles.title, styles.usd)}>USD</Typography>
      </Box>
    </Box>
  )
}

export default SupplyBalance
