import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        margin: theme.spacing(3),
    },
    list: {
        margin: theme.spacing(2),
    },
    centered: {
        margin: 'auto'
    },
    hidden: {
        display: 'none'
    }
}))