import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Whittalerchocolate = ({ Whittaleritem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Whittaleritem) => {
        dispatch(add(Whittaleritem))
    };
    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "450px", background: "#FFEAA7" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Whittaleritem.img}
                title="Whittaler"
            />
            <CardContent >
                <Typography gutterBottom variant="" color="#A04120" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Whittaleritem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="#A04120" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price:  {Whittaleritem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#A04120", width: "120px" }} onClick={() => handleAdd(Whittaleritem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >

    )
}

export default Whittalerchocolate;