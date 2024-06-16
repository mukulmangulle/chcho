import { Box } from '@mui/material'
import React from 'react'
import imghome from "../assets/c1.jpg"
import CardGroup from '../container/CardGroup'
import Product from '../container/Product'
import Footer from '../container/Footer'

const Home = () => {
  return (
    <>
      <Box>
        <img src={imghome} alt="" style={{ width: "100%", height: "70vh", objectFit: "cover", backgroundPosition: "center" }} />
      </Box>

      <CardGroup />
      <Product />
      <Footer />
    </>
  )
}

export default Home