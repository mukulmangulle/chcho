import { Box, Container, } from '@mui/material'
import React from 'react'
import ewedel from "../assets/poster/Ewedel.webp"
import { useSelector } from 'react-redux'
import Ewedeliteam from '../Ewedeliteam'


const Ewedel = () => {
  const { Ewedelitems } = useSelector(state => state.product)
  return (
    <Box sx={{ background: "linear-gradient(to bottom ,#001a33 ,#224568,#c5d9ec)" }} >

      <img src={ewedel} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center" }} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Ewedelitems.map((Ewedelitem) => <Ewedeliteam key={Ewedelitem.id} Ewedelitem={Ewedelitem} />)
        }

      </Container>
    </Box >
  )
}

export default Ewedel