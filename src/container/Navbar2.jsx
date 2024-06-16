import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"


const Navbar2 = () => {

    const { Items } = useSelector((state) => state.cart);

    return (


        <Box sx={{ flexGrow: 1, background: "white" }}>
            <AppBar position="static" sx={{ background: "white", color: "#A04120", flexGrow: 1 }}>
                <Toolbar sx={{ gap: "25px", display: "flex", flexWrap: "wrap", margin: "5px" }} >

                    <Typography variant=''>
                        <Link to={"/whittaker"}>
                            Whittaker's
                        </Link>
                    </Typography>

                    <Typography variant=''>
                        <Link to={"/cadbury"}>
                            Cadbury
                        </Link>
                    </Typography>


                    <Typography variant='' >
                        <Link to={"/rhinevalley"}>
                            Rhine Valley
                        </Link>
                    </Typography>

                    <Typography variant='' >
                        <Link to={"/neuhaus"}>
                            Neuhaus
                        </Link>
                    </Typography>
                    <Typography variant=''>
                        <Link to={"/ewedel"}>
                            E.Wedel
                        </Link>
                    </Typography>


                    <Typography variant='' >
                        <Link to={"/lindt"}>
                            Lindt
                        </Link>
                    </Typography>

                    <Typography variant=''>
                        <Link to={"/kitkat"}> Kit Kat
                        </Link>
                    </Typography>




                    <Typography variant='' sx={{ flexGrow: 1 }}>
                        <a href="/venchi"  >Venchi</a>
                    </Typography>


                    <Box>
                        <Button variant="contained" size="small"
                            sx={{ background: "#E3E1D9", width: "120px" }}
                            endIcon={<AddShoppingCartIcon />}>
                            <Link to={"/Cart"}>  CART ({Items.length})</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar2