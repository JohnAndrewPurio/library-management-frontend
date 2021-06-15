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
    const access_token = useSelector(state => state.access_token)
    const pageRedirect = useSelector(state => state.pageRedirect)

    const toggleDrawer = () => {
        setDrawerOpen(prev => !prev)
    }

    useEffect( () => {
        if(!booksList && access_token)
            dispatch( requestBooksListData(booksEndPoint) )
    }, [booksList])

    useEffect( () => {
        localStorage.setItem('access_token', access_token)
    }, [])

    useEffect(() => {
        if(pageRedirect) {
            localStorage.removeItem('access_token')
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