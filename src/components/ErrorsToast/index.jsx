import { Snackbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { storeError } from '../../redux/actions'
import { Alert } from './styles.js'

export default function ErrorsToast({ message }) {
    const dispatch = useDispatch()
    const errors = useSelector(state => state.errors)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch( storeError(null) )
    }

    return (
        <Snackbar open={!!errors} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {errors}
            </Alert>
        </Snackbar>
    )
}