import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);


    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            variant="contained"
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                        >Login</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {
                            isLoading && <img src="http://webdesign-finder.com/skymax-demo/brobit/wp-content/uploads/2019/07/preloader03.gif" alt="" />
                        }

                        {
                            user?.email && <Alert severity="success">User created successful!</Alert>
                        }
                        {
                            authError && <Alert severity="error">{authError}!</Alert>

                        }

                    </form>
                    <p>-----------------------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: '100%' }} />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;