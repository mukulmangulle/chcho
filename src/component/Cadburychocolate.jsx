import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Cadburychocolate = ({ Cadburyitem }) => {


    const dispatch = useDispatch()

    const handleAdd = (Cadburyitem) => {
        dispatch(add(Cadburyitem))
    };



    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "450px", background: "white" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Cadburyitem.img}
                title="Cadbury"
            />
            <CardContent >
                <Typography color="#A04120" gutterBottom variant="" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Cadburyitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography color="#A04120" variant="" sx={{ textAlign: "center", fontSize: "20px" }}>
                    Price: {Cadburyitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#333370", width: "120px" }} onClick={() => handleAdd(Cadburyitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >

    )
}

export default Cadburychocolate