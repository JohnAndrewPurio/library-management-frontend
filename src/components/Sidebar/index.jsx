import { Drawer, List, Typography, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Book, Category, People } from '@material-ui/icons' 
import { Link } from 'react-router-dom'

const anchor = 'left'
const sidebarMenu = ['List of Books', 'Categories', 'Issued Books', 'Management']
const icons = [<Book />, <Category />, <Book />, <People />]
const links = ['/', '/categories', '/issued_books', '/management']

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

export default function Sidebar({drawerOpen, toggleDrawer}) {
    const classes = useStyles()

    return (
        <>
            <Drawer anchor={anchor} open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    <Typography align="center" variant="h5">
                        Menu
                    </Typography>
                    {
                        sidebarMenu.map( (menu, index) => (
                                <Link to={links[index]} key={menu}>
                                    <ListItem className={classes.list} button >
                                        <ListItemIcon>{icons[index]}</ListItemIcon> 
                                        <ListItemText primary={menu} />
                                    </ListItem>
                                </Link>
                            )
                        )
                    }

                </List>
            </Drawer>
        </>
    )
}
