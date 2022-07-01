import { Box } from "@mui/system";
import React from "react";
import CircleIcon from '@mui/icons-material/Circle';

const headerLogin = () => {
    return (
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
    )
}
export default headerLogin;