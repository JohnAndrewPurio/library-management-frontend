import { AppBar, CssBaseline, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { promptSignUp } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'

export default function NavBar({toggleDrawer}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const signUpDialog = useSelector(state => state.signUpDialog)

    const toggleDialog = () => {
      history.push('/signup')
      dispatch( promptSignUp(!signUpDialog) )
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

                  <Button color="inherit" onClick={toggleDialog} >Signup</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
