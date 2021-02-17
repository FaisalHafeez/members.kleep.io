import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const BilingInformation = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box mt={1}>
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom> Billing Information
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default BilingInformation;