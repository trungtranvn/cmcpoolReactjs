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
// import { useLocalState } from './useLocalStorage';
import axios from 'axios'

class Singin1 extends React.Component {

    state = {
        username: "",
        password: "",
        isChecked: true
    };


    componentDidMount() {
        if (localStorage.checkbox && localStorage.username !== "") {
            this.setState({
                isChecked: true,
                username: localStorage.username,
                password: localStorage.password
            });
        }
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onChangeCheckbox = (event) => {
        this.setState({
            isChecked: event.target.checked
        });
    };

    loginSubmit = () => {
        const { username, password, isChecked } = this.state;
        if (isChecked && username !== "") {
            localStorage.username = username;
            localStorage.password = password;
            localStorage.checkbox = isChecked;
        }
        if(!isChecked && localStorage.username == username){
            localStorage.username = "";
            localStorage.password = "";
            localStorage.checkbox = isChecked;
        }
        // here call the API to signup/login
        var url = "http://localhost:8080/api/auth/signin"
        axios.post(url, { "username": username, "password": password })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.message)
                if (res.data.code == 200) {
                    localStorage.jwt = res.data.accessToken;
                    window.location = "/home"
                } else {
                    localStorage.jwt = "";
                    window.alert(res.data.message);
                }


            })
    };

    paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto", background: '#4D44B5' }
    avatarStyle = { width: '136px', height: '136px', margin: '20px' }
    userNameStyle = { background: 'rgba(255, 255, 255, 0.1)', borderRadius: '90px' }
    passwordStyle = { background: 'rgba(255, 255, 255, 0.1)', borderRadius: '90px' ,marginTop: '15px' }
    remenberMeStyle = { fontColor: 'white' }


    render() {
        const { username, password, isChecked } = this.state;
        return (
            //   <div>
            //     <form>
            //       <table align="center">
            //         <tr>
            //           <td>
            //             <label>Email</label>
            //           </td>
            //           <td>
            //             <input
            //               type="username"
            //               name="username"
            //               value={username}
            //               onChange={this.onChangeValue}
            //             />
            //           </td>
            //         </tr>
            //         <tr>
            //           <td>
            //             <label>Password</label>
            //           </td>
            //           <td>
            //             <input
            //               type="password"
            //               name="password"
            //               value={password}
            //               onChange={this.onChangeValue}
            //             />
            //           </td>
            //         </tr>
            //         <tr>
            //           <td colSpan="2">
            //             <input
            //               type="checkbox"
            //               checked={isChecked}
            //               name="lsRememberMe"
            //               onChange={this.onChangeCheckbox}
            //             />
            //             <label>Remember me</label>
            //           </td>
            //         </tr>
            //         <tr>
            //           <td colSpan="2">
            //             <input type="button" value="Login" onClick={this.loginSubmit} />
            //           </td>
            //         </tr>
            //       </table>
            //     </form>
            //   </div>
            <Grid>
                <Paper elevation={10} style={this.paperStyle}>
                    <Grid align='center'>
                        <Avatar style={this.avatarStyle}>
                            <LockIcon style={{

                            }} />
                        </Avatar>

                    </Grid>

                    <TextField id='username' name='username' value={username} onChange={this.onChangeValue} style={this.userNameStyle} label='UserName' fullWidth required />
                    <TextField id='password' name='password' value={password} onChange={this.onChangeValue} style={this.passwordStyle} label='PassWord' placeholder='Enter Password' type={'password'} fullWidth required />

                    <Box component="span" sx={{
                        borderRadius: '90px',
                        margintop: '10px'
                    }}>
                        <Button style={{
                            width: "100%",
                            height: '50px',
                            backgroundColor: '#FB7B5D',
                            marginTop: '15px',
                            borderRadius: '90px' 
                        }} id='submit' type='button' onClick={this.loginSubmit}>Login</Button>
                    </Box>

                    <Box sx={{ width: '100%' }}>
                        <Box sx={{
                            float: 'left',
                            height: '60px'
                        }}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" style={this.remenberMeStyle} onChange={this.onChangeCheckbox} />
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
                    <Box sx={{ marginTop: '200px',textAlign:'center'}}>
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
                    </Box>
                </Paper>
            </Grid>
        );
    }
}

export default Singin1;