
// import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';

import { Link } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useLocalState } from './useLocalStorage';

// import { useAlert } from 'react-alert'

import axios from 'axios'
const Signin = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto", background: '#4D44B5' }
    const avatarStyle = { width: '136px', height: '136px', margin: '20px' }
    const userNameStyle = { background: 'rgba(255, 255, 255, 0.1)', borderRadius: '90px' }
    const passwordStyle = { background: 'rgba(255, 255, 255, 0.1)', marginTop: '15px' }
    const remenberMeStyle = { fontColor: 'white' }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [jwt, setJwt] = useLocalState("", "jwt");

    const[isChecked, setIsChecked] = useState("");
    
    function sendLoginRequest() {

        // const alert = useAlert();

        console.log("Im checkings");
        console.log(username);
        console.log(password);
        localStorage.username = username;
        localStorage.password = password;
        const reqBody = {
            "username": username,
            "password": password
        }
        console.log(reqBody)
        var url = "http://localhost:8080/api/auth/signin"
        axios.post(url, { "username": username, "password": password })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.message)
                if (res.data.code == 200) {
                    localStorage.jwt = res.data.accessToken;
                } else {
                    localStorage.jwt = "";
                    window.alert(res.data.message);
                }


            })

        // fetch("http://localhost:8080/api/auth/signin", {
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     method: "post",
        //     body: JSON.stringify(reqBody),
        // })
        //     .then((response) => {
        //         console.log(response);
        //         if (response.status === 200)
        //             Promise.all([response.json(), response.headers])
        //         else return Promise.reject("Invalid login attempt");
        //     })
        //     .then(([body, headers]) => {
        //         setJwt(headers.get("authorization"));

        //     });

    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockIcon style={{

                        }} />
                    </Avatar>

                </Grid>

                <TextField id='UserName' value={username} onChange={(event) => setUsername(event.target.value)} style={userNameStyle} label='UserName' fullWidth required />
                <TextField id='PassWord' value={password} onChange={(event) => setPassword(event.target.value)} style={passwordStyle} label='PassWord' placeholder='Enter Password' type={'password'} fullWidth required />

                <Box component="span" sx={{
                    borderRadius: '90px',
                    margintop: '10px'
                }}>
                    <Button style={{
                        width: "100%",
                        height: '50px',
                        backgroundColor: '#FB7B5D',
                        marginTop: '15px'
                    }} id='submit' type='button' onClick={() => sendLoginRequest()}>Login</Button>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{
                        float: 'left',
                        height: '60px'
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" style={remenberMeStyle} onClick={(event) => setIsChecked(event.target.value)}/>
                        </FormGroup>
                    </Box>
                    <Box sx={{ float: 'right', height: '60px' }}>
                        <Link style={{ color: 'white' }}
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            Forgot Password
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '200px' }}>
                    <Box sx={{
                        display: 'inline',
                        marginRight: '20px'
                    }}>
                        <Link style={{ color: 'white' }}
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            Don’t have an account?
                        </Link>
                    </Box>
                    <Box sx={{
                        display: 'inline'
                    }}>
                        <Link style={{ color: '#FB7B5D' }}
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            SignUp
                        </Link>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}
export default Signin;