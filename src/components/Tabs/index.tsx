import React from 'react'
import clsx from 'clsx'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import HomeIcon from 'components/Icons/Home'
import BalancesIcon from 'components/Icons/Balances'
import { useDispatch, useAppState, setTab } from 'state'
import { ApplicationTab } from 'models'

const useStyles = makeStyles({
  root: {
    marginTop: '1.2rem',
  },
  active: {
    fontWeight: 900,
    borderBottom: '1px solid #929495',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: '30rem',
    paddingBottom: '1rem',
    cursor: 'pointer',
  },
  tabTitle: {
    marginLeft: '0.4rem',
    fontSize: '14px',
  },
})

const Tabs = () => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const { currentTab } = useAppState()
  return (
    <Box className={clsx(styles.root, styles.flex)}>
      <Box
        className={clsx(styles.flex, styles.tab, currentTab === ApplicationTab.DASHBOARD && styles.active)}
        onClick={() => {
          dispatch(setTab(ApplicationTab.DASHBOARD))
        }}
      >
        <HomeIcon />
        <Typography className={clsx(styles.tabTitle)}>Dashboard</Typography>
      </Box>
      <Box
        className={clsx(styles.flex, styles.tab, currentTab === ApplicationTab.BALANCES && styles.active)}
        onClick={() => {
          dispatch(setTab(ApplicationTab.BALANCES))
        }}
      >
        <BalancesIcon />
        <Typography className={styles.tabTitle}>Balances</Typography>
      </Box>
    </Box>
  )
}

export default Tabs
