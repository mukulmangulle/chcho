import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';



const Navbar = () => {

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ background: "#E3E1D9", color: "#A04120" }}>
                <Toolbar sx={{ flexWrap: "wrap" }}>
                    <Typography variant="" sx={{ flexGrow: 1, fontSize: "25px", padding: "20px" }} >
                        <a href="/" >  Chocolate App</a>
                    </Typography>

                    {/* <Button variant="contained" size="small" sx={{ background: "#A04120", width: "120px", margin: "10px" }} endIcon={<LoginIcon />}>
                        Login
                    </Button> */}

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar