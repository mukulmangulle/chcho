import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import venchi from "../assets/poster/venchi.webp"
import { useSelector } from 'react-redux'
import VenchiChocolate from '../component/VenchiChocolate'

const Venchi = () => {
  const { Venchiitems } = useSelector(state => state.product)
  return (
    <>
      <Box sx={{ background: "linear-gradient(to bottom ,#001a33 ,#224568,#c5d9ec)" }}>
        <img src={venchi} alt="" style={{ width: "100%", height: "60vh", objectFit: "cover", backgroundPosition: "center" }} />



        <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            Venchiitems.map((Venchiitem) => <VenchiChocolate key={Venchiitem.id} Venchiitem={Venchiitem} />)
          }
        </Container>



      </Box >

    </>
  )
}

export default Venchi