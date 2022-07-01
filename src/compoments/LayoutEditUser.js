import { Box, display } from "@mui/system";
import React, { useEffect, useState } from "react";


import { Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";

import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";


const LayoutEditUesr = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [role, setrole] = useState('');
    const [status, setstatus] = useState('');
    const [photo, setphoto] = useState();

    const sendLoginRequest = () => {
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(role);
        console.log(status)
    }

    const handleChangeRole = (event) => {
        setrole(event.target.value)
    }
    const handleChangeStatus = (event) => {
        setstatus(event.target.value)
    }


    const [objectUser, setObjectUser] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setObjectUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        (async () => {
            try {

                const jwt = localStorage.getItem("jwt");
                console.log(jwt);
                const user = await axios.get(
                    "http://localhost:8080/api/user/findbyusername?userName=admin",
                    { headers: { "Authorization": `Bearer ${jwt}` } }
                );
                setObjectUser(user.data);
                console.log(user.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    console.log(objectUser);
    console.log(objectUser.id)
    return (
        <>
            <Box sx={{
                width: '80%',
                margin: 'auto',
                backgroundColor: '#D9D9D9',
                marginTop: '50px'
                // display: "flex"
            }}>
                {/* <TextField sx={{ width: '40%', margin: '10px 5% 10px 5%' }} type={"text"} label='UserName' value={username} onChange={(event) => setusername(event.target.value)}></TextField> */}
                <TextField InputLabelProps={{ shrink: true }} sx={{ width: '40%', margin: '10px 5% 10px 5%' }} type={"text"} name='username' label='UserName' value={objectUser.username} onChange={handleChange}></TextField>
                <TextField InputLabelProps={{ shrink: true }} sx={{ width: '40%', margin: '10px 5% 10px 5%' }} type={"password"} name='password' label='Password' value={password} onChange={handleChange}></TextField>
                <TextField InputLabelProps={{ shrink: true }} sx={{ width: '40%', margin: '0px 5% 10px 5%' }} type={"email"} name='email' label='Email' value={objectUser.email} onChange={handleChange}></TextField>
                <TextField InputLabelProps={{ shrink: true }} sx={{ width: '40%', margin: '0px 5% 10px 5%' }} type={"text"} name='phone' label='Phone' value={objectUser.phone} onChange={handleChange}></TextField>
                <TextField InputLabelProps={{ shrink: true }} sx={{ width: '40%', margin: '0px 5% 10px 5%' }} type={"text"} name='address' label='Address' value={objectUser.address} onChange={handleChange}></TextField>
                {/* <TextField sx={{ width: '40%', marginLeft: '5%', marginRight: '5%', marginBottom: '10px' }} type={"text"} label='Role' onChange={(event) => setrole(event.target.value)}></TextField> */}

                <FormControl sx={{ width: '40%', width: '40%', margin: '0px 5% 10px 5%' }} required>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={objectUser.role}
                        label="Role"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Admin</MenuItem>
                        <MenuItem value={2}>Guest</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '40%', margin: '0px 5% 10px 5%' }} required>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='status'
                        defaultValue={objectUser.status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Active</MenuItem>
                        <MenuItem value={2}>Inactive</MenuItem>
                    </Select>
                </FormControl>

                <Button sx={{ width: '15%', margin: '0px 2% 10px 8%', border: 'solid 2px #4D44B5', borderRadius: '40px', color: '#4D44B5' }} type="button" onClick={() => sendLoginRequest()}>Save</Button>
                <Button sx={{ width: '15%', margin: '0px 8% 10px 2%', backgroundColor: '#4D44B5', borderRadius: '40px', color: 'white' }} type="button" onClick={() => sendLoginRequest()}>Cancel</Button>
            </Box>
        </>
    )

}
export default LayoutEditUesr;