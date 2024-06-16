import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Ewedelchocolate = ({ Ewedelitem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Venchiitem) => {
        dispatch(add(Venchiitem))
    };
    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "450px", background: "#e0ebeb" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Ewedelitem.img}
                title="E,Wedel"
            />
            <CardContent >
                <Typography gutterBottom variant="" color=" #00a3cc" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Ewedelitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color=" #00a3cc" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price: {Ewedelitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: " #00a3cc", width: "120px" }} onClick={() => handleAdd(Ewedelitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >


    )
}

export default Ewedelchocolate;