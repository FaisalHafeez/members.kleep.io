import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home } from 'pages';

const Auth = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    )
}

export default Auth;