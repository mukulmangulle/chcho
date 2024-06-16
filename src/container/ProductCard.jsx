import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../features/cart/cartSlice'





const ProductCard = ({ productItem }) => {

    const dispatch = useDispatch()

    const handleAdd = (productItem) => {
        dispatch(add(productItem))
    };



    return (
        <>
            {/* 1 */}

            <Card elevation={10} sx={{ width: "273px", height: "450px", background: "#FFEAA7" }}>
                <CardMedia
                    sx={{ height: "180px", margin: "20px" }}
                    image={productItem.img}
                    title="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="" color="#A04120" component="div" sx={{ textAlign: "center", fontSize: "24px" }}>
                        {productItem.title}
                    </Typography>

                </CardContent>

                <CardActions sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", position: "absolute", top: "0%" }}>
                    <Typography variant="" color="#A04120" sx={{ textAlign: "center", fontSize: "20px" }}>
                        Price:  {productItem.price}
                    </Typography>
                    <Button variant="contained" size="small"
                        sx={{ background: "#A04120", width: "120px", }}
                        onClick={() => handleAdd(productItem)}>
                        ADD CART
                    </Button>
                </CardActions>

            </Card >



        </>
    )
}

export default ProductCard