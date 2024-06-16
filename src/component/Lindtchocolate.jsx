import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Lindtchocolate = ({ Lindtitem }) => {

    const dispatch = useDispatch()

    const handleAdd = (Lindtitem) => {
        dispatch(add(Lindtitem))
    };
    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "450px", background: "#FFDD95" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Lindtitem.img}
                title="Lindt"
            />
            <CardContent >
                <Typography color="#A04120" gutterBottom variant=""  component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Lindtitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="#A04120" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price:  {Lindtitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#A04120", width: "120px" }} onClick={() => handleAdd(Lindtitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >


    )
}

export default Lindtchocolate