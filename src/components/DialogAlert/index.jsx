import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { promptDeleteBook, storeBooksListData } from '../../redux/actions'
import { url } from '../../config'
import { requestDeleteBook } from '../../redux/actions'

export default function DialogAlert() {
    const dispatch = useDispatch()
    const deleteBook = useSelector(state => state.deleteBook)
    const bookToDelete = useSelector(state => state.bookToDelete)

    const closeDialog = () => {
        dispatch( promptDeleteBook(false) )
    }

    const deleteBookRequest = () => {
        dispatch( requestDeleteBook(url + '/books/', bookToDelete?._id) )
        dispatch( promptDeleteBook(false) )
        dispatch( storeBooksListData(null) )
    } 

    return (
        <>
            <Dialog
                open={deleteBook}
                onClose={closeDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete {bookToDelete?.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to delete the book entitled {bookToDelete?.title}? This action is irreversible!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                        No
                    </Button>
                    <Button onClick={deleteBookRequest} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
