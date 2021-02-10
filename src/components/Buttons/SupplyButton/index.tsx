import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ConnectButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(91.25deg, #1F86E6 -28.96%, #1765AD 204.99%)',
    borderRadius: '4px',
    colors: theme.palette.text.primary,
    textTransform: 'none',
    fontSize: '14px',
    width: '205px',
    height: '35px',
  },
}))(Button)

export default ConnectButton
