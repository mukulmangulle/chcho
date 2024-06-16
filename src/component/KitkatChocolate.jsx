import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Kitkatchocolate = ({ Kitkatitem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Kitkatitem) => {
        dispatch(add(Kitkatitem))
    };
    return (


        <Card elevation={10} sx={{ margin: "55px", width: "273px", height: "400px", background: "#FFEAA7" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Kitkatitem.img}
                title="Kit-Kat"
            />
            <CardContent >
                <Typography gutterBottom variant="" color="#A04120" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Kitkatitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="#A04120" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price:  {Kitkatitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#A04120", width: "120px" }} onClick={() => handleAdd(Kitkatitem)}>
                    ADD CART
                </Button>
            </CardActions>
        </Card >

    )
}

export default Kitkatchocolate;

