import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';

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

const PersonalInfo = () => {
    const classes = useStyles();
    const initialPersonInfo = {
        name: '',
        email: '',
        password: ''
    };

    const [person, setPerson] = useState(initialPersonInfo);
    const [disable, setDisable] = useState(true);

    useEffect(() => {

        const updatedPersonInfo = {
            name: 'abc',
            email: 'abc@gmail.com',
            password: 'ncdcnl'
        };
        setPerson(updatedPersonInfo);

    }, [])

    const handleChange = ({ target: { name, value } }) => {
        setDisable(false);
        setPerson({
            ...person, [name]: value
        })
    }

    const handleSubmit = () => {
        setDisable(true);
        console.log('person ----', person);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box mt={1}>
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom>Name
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="name"
                        label="Name"
                        value={person.name}
                        onChange={handleChange}
                        fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <Box mt={1}>
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom>Email
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="email"
                        label="Email"
                        value={person.email}
                        onChange={handleChange}
                        fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <Box mt={1}>
                        <Typography
                            align="center"
                            variant="h5"
                            gutterBottom>Password
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={person.password}
                        onChange={handleChange}
                        fullWidth />
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="outlined"
                        color="primary"
                        disabled={disable}
                        onClick={handleSubmit}
                        fullWidth>
                        Update
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default PersonalInfo;