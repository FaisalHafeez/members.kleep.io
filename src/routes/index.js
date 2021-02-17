import React, { Fragment } from 'react';

import { AuthRoutes, PublicRoutes } from 'routing';

const AllRoutes = ({ isLoggedIn, setLoggedIn }) => {
    return (
        <Fragment>
            { isLoggedIn ? (<AuthRoutes />) : (<PublicRoutes setLoggedIn={setLoggedIn} />)}
        </Fragment>)
}

export default AllRoutes;