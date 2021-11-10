import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);


    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password didn't match");
            e.preventDefault();
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                        >Register</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>

                    </form>}

                    {
                        isLoading && <img src="http://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/preloader03.gif" alt="" />
                    }

                    {
                        user?.email && <Alert severity="success">User created successful!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}!</Alert>

                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: '100%' }} />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;