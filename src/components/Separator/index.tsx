import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: '17px',
    position: 'relative',
    background: 'linear-gradient(90deg, #EE0B34 -32.48%, #E7A226 103.05%)',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
  },

  bottom: {
    height: '12px',
    background: 'linear-gradient(90deg, #E7A226 0%, #EE0B34 103.05%)',
    transform: 'matrix(1, 0, 0, -1, 0, 0)',
  },
})

export const Separator = () => {
  const classes = useStyles()
  return <Box className={classes.root} />
}

export const BottomSeparator = () => {
  const classes = useStyles()
  return <Box className={classes.bottom} />
}
