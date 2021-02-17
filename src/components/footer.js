import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
                        <Grid container>
                            <Grid item>
                                <DescriptionIcon style={{ fontSize: 50 }} />
                            </Grid>
                            <Grid>
                                <Box mt={1}>
                                    <Typography variant="h4">kleep</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>);
}

export default Footer;