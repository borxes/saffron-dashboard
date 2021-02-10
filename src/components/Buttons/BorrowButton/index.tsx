import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ConnectButton = withStyles((theme) => ({
  root: {
    background: 'linear-gradient(91.25deg, #C18925 -28.96%, #EE0B34 204.99%)',
    borderRadius: '4px',
    colors: theme.palette.text.primary,
    textTransform: 'none',
    fontSize: '14px',
    width: '205px',
    height: '35px',
  },
}))(Button)

export default ConnectButton
