import { Alert as MuiAlert } from '@material-ui/lab'

export function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

