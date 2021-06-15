import { IconButton, List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'

export default function CategoriesList() {
    return (
        <List style={{ padding: '3vmin' }}>
            {/* {
                booksList.map((book, index) => (
                    <Paper key={index} elevation={3} style={{ margin: '1vmin' }}>
                        <ListItem>
                            <ListItemText primary={book.title} secondary={book.authors.join(', ')} />
                            <ListItemIcon>
                                <IconButton onClick={() => promptDelete(true, book)} >
                                    <DeleteForever />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    </Paper>
                ))
            } */}
        </List>
    )
}
