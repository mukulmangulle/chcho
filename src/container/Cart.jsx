import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CartItem from "./CartItem";
import { increse } from "../features/cart/cartSlice";

const Cart = () => {

  const { Items } = useSelector(state => state.cart);



  // const km = () => {
  //   if (km <= 5) {
  //     return (total)
  //   }
  //   else if (km >= 6 && km <= 15) {
  //     return (total + 25)
  //   }
  //   else if (km >= 16 && km <= 20) {
  //     return (total + 40)
  //   }

  //   return km
  // }

  // 

  if (Items.length === 0) {
    return (
      <Box sx={{ background: "#E3E1D9", color: "#A04120", width: "100%", height: "80vh", }}>
        <Container sx={{ display: "flex", justifyContent: "center" }} >
          <Typography variant="" sx={{ fontSize: "50px", margin: "80px" }}>
            NO CART IN ITEM
          </Typography>
        </Container>
      </Box>
    )
  }


  const total = Items.reduce((p, c) => p + c.price, 0);

  return (
    <Box sx={{ backgroundColor: "#E3E1D9", color: "gray" }}>
      <Container sx={{ padding: "10px ", display: "flex", flexWrap: "wrap" }}>
        <Box>
          {
            Items.map(Item => <CartItem key={Item.id} Item={Item} />)
          }
        </Box>
        <form >
          <Box sx={{
            background: "#EAD196", margin: "15px", display: "flex",
            alignItems: "center", justifyContent: "space-evenly", flexDirection: "column"
          }}>
            <TextField id="standard-basic" label="Location" variant="standard" name='location'

            />

            <Button variant="contained" size="small"
              sx={{ background: "gray", margin: "10px", width: "200px" }} >
              Submit
            </Button>

            <TextField id="standard-basic" label="Add km" variant="standard" name='' />

            {/* <Box sx={{ background: "gray", width: " 200px ", height: "100px", display: "flex", alignItems: "start", justifyContent: "space-around" }}>
              <Typography sx={{ color: 'white' }}>

              </Typography>
              <Button variant="contained" size="small"
                sx={{ background: "gray", margin: "10px", width: "20px" }} >
                delete
              </Button>
            </Box> */}


            <Typography variant=" " sx={{ fontSize: "30px" }}>
              Total Amount :<br />
              {/* ${km} */}
              {total}
            </Typography>

            <Button variant="contained" size="small" sx={{ background: "gray", color: "white", width: "300px", margin: "10px" }}>
              PAY NOW
            </Button>
          </Box>
        </form >

      </Container >
    </Box >
  );

};

export default Cart;
