import { AppBar, CssBaseline, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch } from 'react-redux'
import { clearStoredData } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export default function NavBar({ toggleDrawer }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const logOut = () => {
    localStorage.removeItem('tokens')

    history.push('/login')
    dispatch( clearStoredData() )
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Library
          </Typography>

          <Button
            color="secondary"
            variant="contained"
            onClick={logOut}
            startIcon={<ExitToApp />} 
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
