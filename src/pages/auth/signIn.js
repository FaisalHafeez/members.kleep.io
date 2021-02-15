import React from 'react';
import {
    Avatar, Button,
    CssBaseline, TextField,
    FormControlLabel, Checkbox,
    Link, Grid, Typography,
    makeStyles, Container, Paper,
    Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(24),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 70,
        paddingTop: 30
    },
    container: {
        margin: '-61px',
        paddingBottom: 81,
        borderRadius: 25
    },
    googleAvatar: {
        margin: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

    },
    facebookAvatar: {
        margin: theme.spacing(1),
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: 25,
        padding: 10,
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.light,
        letterSpacing: 4
    },
    forgetTextStyle: {
        marginTop: 12,
        color: theme.palette.primary.contrastText,
        textDecoration: 'none'
    },
    signUpTextStyle: {
        marginLeft: 5,
        marginTop: 12,
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        fontStyle: 'bold'
    }
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} square={false} className={classes.container}>
                <div className={classes.paper}>
                    <Typography component="h4" variant="h4">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Grid container>
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Keep me sign in"
                                />

                            </Grid>
                            <Grid item>
                                <Box mt={1}>
                                    <Link href="#" variant="body2" className={classes.forgetTextStyle}>
                                        Forgot password?
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Log in
                        </Button>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="center">
                            <Grid item>
                                <Typography component="subtitle1" variant="subtitle1" align="center">
                                    - OR -
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="subtitle1" variant="subtitle1" align="center">
                                    Sign in With
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-around"
                                    alignItems="center">
                                    <Grid item>
                                        <Avatar className={classes.facebookAvatar}>
                                            <i class="fab fa-facebook-f"></i>
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Avatar className={classes.googleAvatar}>
                                            <i class="fab fa-google"></i>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="center">
                            <Grid item>
                                <Box mt={3}>
                                    <Typography component="body2" variant="body2" align="center">
                                        Don't have an account? <Link href="#" variant="h5" className={classes.signUpTextStyle}> Sign Up</Link>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </Paper>
        </Container>
    );
}

export default SignIn;