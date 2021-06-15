import { Paper, TextField, Button, List, ListItem, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useStyles } from './styles'
import { useRef } from 'react'
import { signUpUser } from '../../redux/actions'

const serverEndPoint = "http://localhost:4000/users/signup"

export default function SignUp() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirm = useRef()
    const image = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        if (password.current.value !== confirm.current.value) {
            console.log('Invalid Form Data')

            return
        }

        const data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            profileImage: image?.current?.value,
        }

        const formData = new FormData()
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("password", data.password)
        formData.append("profileImage", data.profileImage)

        dispatch(signUpUser(serverEndPoint, formData))
    }

    return (
        <>
            <Paper className={classes.container} elevated={10} >
                <form action={serverEndPoint} method="POST" encType="multipart/form-data" onSubmit={submitHandler} >
                    <List className={classes.list}>
                        <ListItem>
                            <Typography variant="h6" >Sign Up</Typography>
                        </ListItem>
                        <ListItem>
                            <TextField inputRef={name} fullWidth label="Name" name="name" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField inputRef={email} fullWidth label="Email" name="email" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField inputRef={password} fullWidth label="Password" type="password" name="password" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <TextField inputRef={confirm} fullWidth label="Confirm Password" type="password" variant="outlined" />
                        </ListItem>
                        <ListItem>
                            <input
                                accept="image/*"
                                className={classes.hidden}
                                id="contained-button-file"
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload
                                </Button>
                            </label>
                        </ListItem>
                        <ListItem>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </ListItem>
                    </List>
                </form>
            </Paper>
        </>
    )
}