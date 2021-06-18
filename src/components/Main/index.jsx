import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import BooksList from '../BooksList'
import Loading from '../Loading'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import { redirectToPage, requestBooksListData } from '../../redux/actions'
import { booksEndPoint } from '../../config'

export default function Main() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const booksList = useSelector(state => state.booksList)
    const tokens = useSelector(state => state.tokens)
    const pageRedirect = useSelector(state => state.pageRedirect)

    const toggleDrawer = () => {
        setDrawerOpen(prev => !prev)
    }

    useEffect( () => {
        if(!booksList && tokens)
            dispatch( requestBooksListData(booksEndPoint) )
    }, [booksList])

    useEffect( () => {
        localStorage.setItem('tokens', JSON.stringify( tokens ) )
    }, [])

    useEffect(() => {
        if(pageRedirect) {
            localStorage.removeItem('tokens')
            history.push(pageRedirect)
            dispatch( redirectToPage(null) )
        }
    }, [pageRedirect])

    return (
        <>
            <NavBar toggleDrawer={toggleDrawer} />
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

            <Switch>
                <Route exact path="/" >
                    {
                        !booksList ? <Loading />: <BooksList />
                    }
                </Route>
                <Route exact path="/categories" />
                <Route exact path="/issued_books" />
                <Route exact path="/management" />
            </Switch>
        </>
    )
}