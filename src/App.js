import { Fragment } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

import { SignIn } from 'pages/auth/index';

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
  return (
    <Fragment>
      <Avatar alt="Remy Sharp" variant="square" src={webAppLogo} className={classes.logoStyle} />
      <SignIn />
    </Fragment>
  );
}

export default App;
