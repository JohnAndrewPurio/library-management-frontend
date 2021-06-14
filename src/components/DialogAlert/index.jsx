import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { promptDeleteBook } from '../../redux/actions'

export default function DialogAlert({deleteBookRequest, promptDelete}) {
    const dispatch = useDispatch()
    const deleteBook = useSelector(state => state.deleteBook)
    const bookToDelete = useSelector(state => state.bookToDelete)

    const closeDialog = () => {
        dispatch( promptDeleteBook(false) )
    }

    return (
        <>
            <Dialog
                open={deleteBook}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete {bookToDelete?.bookName}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to delete the book entitled {bookToDelete?.bookName}? This action is irreversible!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                        No
                    </Button>
                    <Button onClick={()  => deleteBookRequest(bookToDelete?.bookID) } color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
