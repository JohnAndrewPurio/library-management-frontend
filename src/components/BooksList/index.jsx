import { Paper, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import DialogAlert from '../DialogAlert'
import AddBookForm from '../DialogAlert'
import FloatingAddButton from '../FloatingAddButton'
import { useDispatch, useSelector } from 'react-redux'
import { cacheBookToDelete, promptDeleteBook } from '../../redux/actions'

export default function BooksList() {
    const dispatch = useDispatch()
    const booksList = useSelector(state => state.booksList)

    const promptDelete = (val, book = null) => {
        dispatch( promptDeleteBook(val) )
        dispatch( cacheBookToDelete(book) )
    }

    return (
        <>
            <List style={{padding: '3vmin'}}>
                {
                    booksList.map( (book, index) => (
                        <Paper key={index} elevation={3} style={{margin: '1vmin'}}>
                            <ListItem>
                                <ListItemText primary={book.title} secondary={book.authors.join(', ')} />
                                <ListItemIcon>
                                    <IconButton onClick={ () => promptDelete(true, book) } >
                                        <DeleteForever />
                                    </IconButton>   
                                </ListItemIcon>
                            </ListItem>
                        </Paper>
                    ))
                }
            </List>

            <DialogAlert />

            <AddBookForm />

            <FloatingAddButton />
        </>
    )
}