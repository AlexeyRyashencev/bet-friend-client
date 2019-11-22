import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

/* views */
import App from './views/app';
import Home from './views/home';
import Profile from './views/profile';

export default () => (
    <Router>
        <App>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
        </App>
    </Router>
);
