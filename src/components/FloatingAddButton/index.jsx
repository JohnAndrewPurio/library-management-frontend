import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { promptAddBook } from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3)
    }
}))

export default function FloatingAddButton() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const addBook = () => {
        dispatch( promptAddBook(true) )
    }

    return (
        <>
            <Fab className={classes.fab} color="primary" aria-label="add" onClick={addBook} >
                <AddIcon />
            </Fab>
        </>
    )
}
