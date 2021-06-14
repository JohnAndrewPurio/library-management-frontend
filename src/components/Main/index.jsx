import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import BooksList from '../BooksList'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'
import SignUp from '../SignUp'

export default function Main() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(prev => !prev)
    }

    return (
        <>
            <NavBar toggleDrawer={toggleDrawer} />
            <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

            <Switch>
                <Route exact path="/" component={BooksList} />
                <Route exact path="/users/signup" component={SignUp} />
                <Route exact path="/categories" />
                <Route exact path="/issued_books" />
                <Route exact path="/management" />
            </Switch>
        </>
    )
}