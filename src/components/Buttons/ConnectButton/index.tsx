import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ConnectButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#1A98F1',
    borderRadius: '2px',
    colors: theme.palette.text.primary,
    textTransform: 'none',
    fontSize: '14px',
  },
}))(Button)

export default ConnectButton
