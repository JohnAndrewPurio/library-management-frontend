import { TextField, Dialog } from '@/material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { promptAddBook } from '../../redux/actions'

export default function AddBookForm() {
    const dispatch = useDispatch()
    const addBook = useSelector(state => state.addBook)

    const closeDialog = () => {
        dispatch( promptAddBook(false) )
    }
    
    return (
        <Dialog
            open={addBook}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <form action="/books" method="POST">
                <TextField label="Book Title" variant="outlined" />
            </form>
        </Dialog>
    )
}
