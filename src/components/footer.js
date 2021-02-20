import React from 'react';
import { Container, Grid, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logoUrl from 'assets/footer-logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'fixed'
    },
    bacgroundColorBlack: {
        backgroundColor: '#333333',
        paddingBottom: 75,
        color: 'white'
    },
    Margin: {
        marginTop: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 5,
    },
    logoStyle: {
        width: 144,
        marginTop: 7
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.bacgroundColorBlack}>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ paddingTop: 20 }}>
                    <Grid item md={4} sm={12}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={3}>
                            <Grid item>
                                <Typography>
                                    About Kleep
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    Terms and Conditions
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={3}>
                            <Grid item>
                                <Typography align="left">
                                    About Kleep
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left">
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left">
                                    Terms and Conditions
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <img src={logoUrl} alt="Kleep" className={classes.logoStyle} />
                    </Grid>
                </Grid>
            </Container>
        </div>);
}

export default Footer;