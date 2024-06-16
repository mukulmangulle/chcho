import { Box, Container } from '@mui/material'
import React from 'react'
import cadbury from "../assets/poster/cadbury.webp"
import { useSelector } from 'react-redux'
import Cadburychocolate from '../component/Cadburychocolate'


const Cadbury = () => {
  const { Cadburyitems } = useSelector(state => state.product)


  return (
    <Box sx={{ background: "linear-gradient(to bottom ,#292957 , #34347f,#c5d9ec)" }} >

      <img src={cadbury} alt="" style={{ width: "100%", height: "70vh", objectFit: "cover", backgroundPosition: "center" }} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Cadburyitems.map((Cadburyitem) => <Cadburychocolate key={Cadburyitem.id} Cadburyitem={Cadburyitem} />)
        }
      </Container>
    </Box>
  )
}

export default Cadbury