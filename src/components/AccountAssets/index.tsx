import React from 'react'
import { Box, Table, TableBody, TableHead, TableRow } from '@material-ui/core'
import MuiTableCell from '@material-ui/core/TableCell'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { useAppState } from 'state'
import { weiToNum } from 'toolbelt'
import AaveIcon from 'components/Icons/Aave'
import { useTokenBalance } from 'hooks'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime as any)

const useStyles = makeStyles({
  table: {
    border: '1px solid #A5A5A5',
    borderRadius: '4px',
  },
  separator: {
    border: '1px solid #A5A5A5',
    transform: 'rotate(180deg)',
  },
})

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell)

const THCell = withStyles({
  root: {
    fontSize: '16px',
    borderBottom: '1px solid #A5A5A5',
  },
})(MuiTableCell)

interface Tuple {
  '0': string
  '1': string
}

const TUPLE_ZERO: Tuple = {
  '0': '0',
  '1': '1',
}

const AccountAssets = () => {
  const styles = useStyles()
  const { account, utilization: balances, epoch } = useAppState()

  const epochStart = account ? epoch && dayjs.unix(parseInt(epoch[0])).fromNow() : ''
  const epochEnd = account ? parseInt(epoch[1] as string) / (60 * 60 * 24) : ''
  return (
    <Box>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <THCell></THCell>
            <THCell align="left">Pools</THCell>
            <THCell align="left">S Tranche Utilized</THCell>
            <THCell align="left">S Tranche Unutilized</THCell>
            <THCell align="left">Epoch Start</THCell>
            <THCell align="left">Epoch Duration</THCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{/* <AaveIcon /> */}</TableCell>
            <TableCell align="left">DAI-Compound</TableCell>
            <TableCell align="left">{account ? weiToNum(balances[0]) : ''}</TableCell>
            <TableCell align="left">{account ? weiToNum(balances[1]) : ''}</TableCell>
            <TableCell align="left">{epochStart}</TableCell>
            <TableCell>{epochEnd} days</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}

export default AccountAssets
