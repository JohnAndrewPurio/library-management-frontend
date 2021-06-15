import { useRef } from 'react'
import { Button, Grid, List, ListItem, Paper, TextField, Typography } from '@material-ui/core'
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

        dispatch(logInUser(logInEndPoint, data))
    }

    const redirectToSignUp = () => {
        history.push('/signup')
    }

    return (
        <div className={classes.login}>
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
                            <Grid container spacing={2}>
                                <Grid item xs={6} align="center">
                                    <Button type="submit" variant="contained" color="secondary">Log In</Button>
                                </Grid>
                                <Grid item xs={6} align="center">
                                    <Button variant="contained" color="primary" onClick={redirectToSignUp} >Sign Up</Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </form>


            </Paper>
        </div>
    )
}
