import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Pools from 'components/AccountAssets'

const useStyles = makeStyles({
  root: {
    margin: '8% auto',
    width: '80%',
  },
  title: {
    fontSize: '18px',
    marginBottom: '3rem',
  },
})

const Balances = () => {
  const styles = useStyles()
  const [aavePrice, setAavePrice] = React.useState(0)

  React.useEffect(() => {
    const getAavePrice = async () => {
      try {
        fetch('https://api.coingecko.com/api/v3/coins/aave')
          .then((response) => response.json())
          .then((response) => setAavePrice(response.market_data.current_price.usd))
      } catch (err) {
        console.log(`error getting aave price ${err}`)
      }
    }

    getAavePrice()
    const id = setInterval(getAavePrice, 10000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <Box className={styles.root}>
      <Pools />
      <div style={{ height: '3rem' }} />
    </Box>
  )
}

export default Balances
