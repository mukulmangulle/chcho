
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrese, increse, remove } from "../features/cart/cartSlice";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";


const CartItem = ({ Item, id }) => {

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(remove(id))
    }
    const [number, setNumber] = useState(1)


    //increse
    const handleincrese = (id) => {

        dispatch(increse(id))
        setNumber(number + 1)
        console.log(Item);

    }

    // decrese
    const handledecrease = (id) => {


        dispatch(decrese(id))
        setNumber(number)
        if (number <= 0) {
            setNumber(1);
        }
        console.log(Item);

    };


    return (

        <Container>

            <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                <Card elevation={10} sx={{ maxWidth: "700px", maxHeight: "640px", background: "gray" }}>
                    <CardContent >
                        <CardMedia
                            sx={{ height: "180px", width: "250px", margin: "0px 185px" }}
                            image={Item.img}

                        />
                    </CardContent>
                    <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column" }}>

                        <Typography gutterBottom variant="" color="#EAD196 " component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                            {Item.title}
                        </Typography>
                        <Typography variant="" color="#EAD196 " sx={{ fontSize: "20px", display: "flex" }}>
                            Qut=
                            <button onClick={() => handleincrese(Item.id)}
                                style={{ color: "#A04120", width: "25px", background: "#EAD196 ", border: "none", margin: "10px" }} >
                                <Typography variant="h6">  +</Typography>
                            </button>

                            <Typography variant="" sx={{ display: "flex", alignItems: "center" }}>
                                {number}
                            </Typography>

                            <button onClick={() => handledecrease(Item.id)}
                                style={{ color: "#A04120", width: "25px", background: "#EAD196 ", border: "none", margin: "10px" }}  >
                                <Typography variant="h6">-</Typography>
                            </button>
                        </Typography>

                        <Typography variant="" color="#EAD196 " sx={{ textAlign: "center", fontSize: "22px" }}>
                            Price : {Item.price}
                        </Typography>


                        <Typography variant="" color="#EAD196 " sx={{ textAlign: "center", fontSize: "22px" }}>
                            Delevery : ₹ 40
                        </Typography>

                        <Button variant="contained" size="small"
                            sx={{ background: "#EAD196 ", width: "650px", color: "#A04120" }}
                            onClick={() => handleRemove(Item.id)}>
                            Remove Item
                        </Button>
                    </CardActions>
                </Card >

            </Box>

        </Container >

    );
};

export default CartItem;