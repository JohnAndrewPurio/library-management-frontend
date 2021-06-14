import { useEffect } from 'react' 
import { Paper, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import DialogAlert from '../DialogAlert'
import AddBookForm from '../DialogAlert'
import FloatingAddButton from '../FloatingAddButton'
import { useDispatch, useSelector } from 'react-redux'
import { cacheBookToDelete, promptDeleteBook, requestBooksListData, requestDeleteBook } from '../../redux/actions'

const url = 'http://localhost:4000'

export default function BooksList() {
    const dispatch = useDispatch()
    const booksList = useSelector(state => state.booksList)
    const bookToDelete = useSelector(state => state.bookToDelete)

    const promptDelete = (val, book = null) => {
        dispatch( promptDeleteBook(val) )
        dispatch( cacheBookToDelete(book) )
    }

    const deleteBookRequest = async (bookID) => {
        dispatch( requestDeleteBook(url + '/books/', bookID) )
        promptDelete(false)
    } 

    useEffect( () => {
        if(!bookToDelete)
            dispatch( requestBooksListData(url + '/books_list') )
    }, [bookToDelete])

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

            <DialogAlert 
                deleteBookRequest={deleteBookRequest} 
                promptDelete={promptDelete} 
                bookID={bookToDelete?._id}
                bookName={bookToDelete?.title}
            />

            <AddBookForm />

            <FloatingAddButton />
        </>
    )
}