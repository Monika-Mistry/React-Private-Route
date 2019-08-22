import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import { Public } from './Public';
import { Protected } from './Protected';
import { PrivateRoute } from './PrivateRoute';
import { Login } from './Login';
import { AuthButton } from './AuthButton';


export function AuthExample(props) {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route exact path="/" component={Login} />
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
}



