import { Paper, TextField, Button, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        margin: theme.spacing(3),
    },
    list: {
        margin: theme.spacing(2),
    },
    centered: {
        margin: 'auto'
    },
    hidden: {
        display: 'none'
    }
}))

const serverEndPoint = "http://localhost:4000/users/signup"

export default function SignUp() {
    const classes = useStyles()
    const signUpDialog = useSelector(state => state.signUpDialog)
    const dispatch = useDispatch()

    return (
        <>
            <Paper className={classes.container} elevated={10} style={{}} >
                <form action={serverEndPoint} method="POST">
                    <List className={classes.list}>
                        <ListItem>
                            <Typography variant="h6" >Sign Up</Typography>
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth label="Name" name="name" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth label="Email" name="email" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth label="Password" type="password" name="password" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField fullWidth label="Confirm Password" type="password" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <label htmlFor="profileImage">
                                <Button variant="outlined">Upload Image</Button>           
                            </label>
                            <input className={classes.hidden} accept="image/*" id="profileImage" name="profileImage" type="file" />
                        </ListItem>
                        <ListItem>
                            <Button type="submit" variant="contained" color="primary" >Submit</Button>
                        </ListItem>
                    </List>
                </form>
            </Paper>
        </>
    )
}