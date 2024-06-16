import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const VenchiChocolate = ({ Venchiitem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Venchiitem) => {
        dispatch(add(Venchiitem))
    };
    return (

        <Card sx={{ margin: "5px", width: "273px", height: "500px", background: "#ff822e" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Venchiitem.img}
                title="venchi"

            />
            <CardContent >
                <Typography gutterBottom variant="" color="white" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Venchiitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="white" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price: {Venchiitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "white", width: "120px", color: "#ff822e" }} onClick={() => handleAdd(Venchiitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >




    )
}

export default VenchiChocolate