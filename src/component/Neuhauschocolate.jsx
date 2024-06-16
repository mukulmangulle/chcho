import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { add } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const Neuhauschocolate = ({ Neuhausitem }) => {
    const dispatch = useDispatch()

    const handleAdd = (Neuhausitem) => {
        dispatch(add(Neuhausitem))
    };

    return (

        <Card elevation={10} sx={{ margin: "5px", width: "273px", height: "450px", background: "#f7f7f7" }}>
            <CardMedia
                sx={{ height: "180px", margin: "20px" }}
                image={Neuhausitem.img}
                title="Neuhaus"
            />
            <CardContent >
                <Typography gutterBottom variant="" color="#19334d" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                    {Neuhausitem.title}
                </Typography>

            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Typography variant="" color="#19334d" sx={{ textAlign: "center", fontSize: "20px" }}>
                Price: {Neuhausitem.price}
                </Typography>
                <Button variant="contained" size="small"
                    sx={{ background: "#19334d", width: "120px" }} onClick={() => handleAdd(Neuhausitem)}>
                    ADD CART
                </Button>
            </CardActions>

        </Card >


    )
}

export default Neuhauschocolate