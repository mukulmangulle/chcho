import { Box, Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import kitkat from "../assets/poster/kitkat.webp"
import Kitkatchocolate from '../component/KitkatChocolate'


const KitKat = () => {

  const { Kitkatitems } = useSelector(state => state.product)
  return (
    <Box  >

      <img src={kitkat} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center", display: "flex", }} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Kitkatitems.map((Kitkatitem) => <Kitkatchocolate key={Kitkatitem.id} Kitkatitem={Kitkatitem} />)
        }
      </Container>


    </Box>
  )
}

export default KitKat