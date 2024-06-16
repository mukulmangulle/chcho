import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

const Rhinechocolate = ({ Rhinevalleyitem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Rhinevalleyitem) => {
        dispatch(add(Rhinevalleyitem))
    };


    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "500px", background: "white" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Rhinevalleyitem.img}
                title="Rhinevalley"
            />
            <CardContent >
                <Typography gutterBottom variant="" color="#004080" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Rhinevalleyitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="#004080" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price: {Rhinevalleyitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#004080", width: "120px" }} onClick={() => handleAdd(Rhinevalleyitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >

    )
}

export default Rhinechocolate