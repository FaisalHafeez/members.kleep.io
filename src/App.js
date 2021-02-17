import { Fragment, useState } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import AllRoutes from 'routes';

import webAppLogo from './kleep.png';

const useStyles = makeStyles((theme) => ({

  logoStyle: {
    width: 142,
    height: 58,
    marginTop: 34,
    marginLeft: 34,
  }

}));

function App() {
  const classes = useStyles();

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Fragment>
      <Avatar alt="Remy Sharp" variant="square" src={webAppLogo} className={classes.logoStyle} />
      <Router>
        <AllRoutes isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Router>
    </Fragment>
  );
}

export default App;
