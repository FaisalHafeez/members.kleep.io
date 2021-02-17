import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { SignIn } from 'pages';

const PublicRoutes = ({ setLoggedIn }) => {
    return (
        <Switch>
            <Route path='/' component={() => <SignIn setLoggedIn={setLoggedIn} />} />
        </Switch>
    )
}

export default PublicRoutes;