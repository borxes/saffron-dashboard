import React from 'react'
import { components, OptionProps } from 'react-select'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Select from 'react-select'
import AaveIcon from 'components/Icons/Aave'
import SushiIcon from 'components/Icons/Sushi'
import UniIcon from 'components/Icons/Uniswap'

import { AnyValue } from 'models'

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
})

const borrowOptions = [{ value: 'Aave', label: 'AAVE', icon: <AaveIcon /> }]

const options = [
  { value: 'Aave', label: 'AAVE', icon: <AaveIcon /> },
  { value: 'StkAave', label: 'StkAAVE', icon: <AaveIcon /> },
  { value: 'Sushi', label: 'Sushi', icon: <SushiIcon /> },
  { value: 'xSushi', label: 'xSushi', icon: <SushiIcon /> },
  { value: 'Uni', label: 'Uni', icon: <UniIcon /> },
]

const { Option } = components
const IconOption = (props: AnyValue) => (
  <Option {...props}>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ marginRight: '1rem' }}>{props.data.icon}</div>
      <div style={{ color: 'black' }}>{props.data.label}</div>
    </div>
  </Option>
)

interface PoolSelectorProps {
  isBorrow: boolean
}

const PoolSelector = ({ isBorrow }: PoolSelectorProps) => {
  const styles = useStyles()
  return (
    <Box className={styles.root}>
      <Typography variant="caption">Voting Pool</Typography>
      <Select
        defaultValue={options[0]}
        options={isBorrow ? borrowOptions : options}
        components={{ Option: IconOption }}
      />
    </Box>
  )
}

export default PoolSelector
