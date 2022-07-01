import { Box } from "@mui/system";
import React from "react";
import Signin from "./Signin";
import Singin1 from "./Signin1";
import CircleIcon from '@mui/icons-material/Circle';
import { Avatar, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
class Login extends React.Component {

    state ={
        lang : "English"
    };
    handleChange = (event)  => {
         this.setState({
            lang : event.target.value,
        })
        console.log(this.state.lang)
    };

    render() {
        return (
            <>
                <Box sx={{
                    backgroundColor: '#4D44B5;',
                    height: '254px',
                    width: '100%'
                }}>
                    <>
                        <Box sx={{
                            color: 'white',
                            fontSize: '50px',
                            fontStyle: 'bold',
                            paddingLeft: '50px',
                            paddingTop: '90px',
                            fontWeight: 'bold'
                        }}>
                            CMC ACADEMY
                        </Box>
                        <Box sx={{

                        }}>
                            <CircleIcon style={{
                                // backgroundColor: '#FB7D5B',
                                // borderRadius: '1000px',
                                color: '#FB7D5B',
                                width: '900px',
                                height: '400px',
                                right: '0px',
                                top: '80px',
                                position: 'absolute',
                                display: 'flex'
                            }}></CircleIcon>
                        </Box>
                        <Box sx={{

                        }}>
                            <CircleIcon style={{
                                // backgroundColor: '#FB7D5B',
                                // borderRadius: '1000px',
                                color: '#FCC43E',
                                width: '1000px',
                                height: '500px',
                                right: '-200px',
                                top: '30px',
                                position: 'absolute',
                                display: 'flex'
                            }}></CircleIcon>
                        </Box>
                    </>
                </Box>
                <Box sx={{
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#F5F5F5'
                }}>
                    <Box sx={{
                        width: '40%',
                        backgroundColor: '#F5F5F5',
                        float: 'left'
                    }}>
                        <Singin1 />
                    </Box>
                    <Box sx={{
                        width: '60%',
                        backgroundColor: '#F5F5F5',

                        float: 'right'

                    }}>
                        <Box sx={{
                            paddingTop: '50px',
                            paddingLeft:'1000px'
                        }}>
                            <TextField id="select"  value={this.state.lang} select onChange={this.handleChange}>
                                <MenuItem value="Vietnamese" >Vietnamese</MenuItem>
                                <MenuItem value="English" >English</MenuItem>
                            </TextField>
                        </Box>
                        <>
                            <Box sx={{
                                paddingTop: '40px',
                                paddingLeft: '50px',
                                width: '300px',
                                textAlign: 'center'
                            }}>
                                <span style={{
                                    color: '#056CF2',
                                    fontSize: '50px'
                                }}>Lean</span> <span style={{
                                    fontSize: '30px'
                                }}> At Your Own <br></br> Pace. </span>
                            </Box>

                        </>
                        <Avatar style={{
                            marginTop: '50px',
                            marginLeft: '100px',
                            height: '300px',
                            width: '300px'
                        }} alt="Remy Sharp" src="https://vnn-imgs-f.vgcloud.vn/2020/03/03/15/bich-phuong-ngoi-sao-khong-an-may-1.jpg" />
                        <Avatar style={{
                            marginTop: '-300px',
                            marginLeft: '400px',
                            height: '100px',
                            width: '100px'
                        }} alt="Remy Sharp" src="https://vnn-imgs-f.vgcloud.vn/2020/03/03/15/bich-phuong-ngoi-sao-khong-an-may-1.jpg" />
                        <Avatar style={{
                            marginTop: '50px',
                            marginLeft: '400px',
                            height: '200px',
                            width: '200px',
                            borderLeft: '50px solid transparent',
                            borderRight: '50px solid transparent',
                            borderBottom: '50px solid transparent',

                        }} alt="Remy Sharp" src="https://vnn-imgs-f.vgcloud.vn/2020/03/03/15/bich-phuong-ngoi-sao-khong-an-may-1.jpg" />

                    </Box>
                </Box>

            </>
        )

    }
}
export default Login;