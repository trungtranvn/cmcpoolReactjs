
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';

import { Link } from '@mui/material';
import { Box } from '@mui/material';
const Signin = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 380, margin: "20px auto", background: '#4D44B5' }
    const avatarStyle = { width: '136px', height: '136px', margin: '20px' }
    const userNameStyle = { background: 'rgba(255, 255, 255, 0.1)' }
    const passwordStyle = { background: 'rgba(255, 255, 255, 0.1)' }
    const remenberMeStyle = { fontColor: 'white' }
    const submitStyle = {
        background: '#FB7B5D', width: '100%',
        height: '66.81px'
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>

                </Grid>

                <TextField style={userNameStyle} label='Username' fullWidth required sx={"border-radius: 9px; margin-bottom :10px ; color: white"} />
                <TextField style={passwordStyle} label='PassWord' placeholder='Enter Password' type={'password'} fullWidth required />
                {/* <TextField type={'submit'} fullWidth required sx={"background: #FB7B5D;border-radius: 90px ; margin-top : 10px"} /> */}
                <Box component="span" sx={{ borderRadius: '90px', margintop: '10px' }}>
                    <Button style={{ width: "100%", height: '50px', backgroundColor: '#FB7B5D', marginTop: '10px' }}>Login</Button>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ float: 'left', height: '60px' }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" style={remenberMeStyle} sx={"color: white"} />
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
                <Box sx={{marginTop:'200px'}}>
                    <Box>
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
                    <Box>

                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}
export default Signin;