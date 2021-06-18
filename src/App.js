import Main from './components/Main'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Loading from './components/Loading'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import { storeAccessToken } from './redux/actions'

function App() {
  const classes = useStyles()
  const tokens = useSelector(state => state.tokens)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect( () => {
    const token = JSON.parse( localStorage.getItem('tokens') )

    dispatch( storeAccessToken(token) )
  }, [])

  useEffect(() => {
    if(!tokens) {
      history.push('/login')

      return
    }

    history.push('/')

    // eslint-disable-next-line
  }, [tokens])

  return (
    <div className={classes.App} >
      <Switch>
        <Route exact path="/" >
          {
            tokens? <Main />: <Loading />
          }
        </Route>
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
