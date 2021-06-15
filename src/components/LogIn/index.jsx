import { useRef } from 'react'
import { Button, List, ListItem, Paper, TextField, Typography } from '@material-ui/core'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import { logInUser } from '../../redux/actions'
import { logInEndPoint } from '../../config'
import { useHistory } from 'react-router-dom'

export default function LogIn() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const email = useRef()
    const password = useRef()
    const history = useHistory()

    const submitHandler = (e) => {
        const data = {
            email: email.current.value,
            password: password.current.value
        }

        e.preventDefault()

        dispatch( logInUser(logInEndPoint, data) )
    }

    const redirectToSignUp = () => {
        history.push('/signup')
    }

    return (
        <Paper className={classes.container} elevated={10} >
                <form action={logInEndPoint} method="POST" onSubmit={submitHandler} >
                    <List className={classes.list}>
                        <ListItem> 
                            <Typography variant="h6" >Log In</Typography>
                        </ListItem>

                        <ListItem>
                            <TextField inputRef={email} fullWidth label="Email" name="email" variant="outlined" />
                        </ListItem>

                        <ListItem>
                            <TextField inputRef={password} fullWidth label="Password" type="password" name="password" variant="outlined" />
                        </ListItem>

                        <ListItem>
                            <Button type="submit" variant="contained" color="primary">Log In</Button>
                        </ListItem>
                    </List>
                </form>

                <Button variant="contained" color="primary" onClick={redirectToSignUp} >Sign Up</Button>
            </Paper>
    )
}
