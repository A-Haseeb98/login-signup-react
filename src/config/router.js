import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Login, Signup, Profile} from '../Containers'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/profile' component={Profile} />

            </Switch>
        </Router>
    )
}

export default AppRouter