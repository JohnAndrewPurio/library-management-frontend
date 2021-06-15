import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
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