import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import rhinevalley from "../assets/poster/Rhine-Valley.webp"
import { useSelector } from 'react-redux'
import Rhinechocolate from '../component/Rhinechocolate'

const RhineValley = () => {
  const { Rhinevalleyitems } = useSelector(state => state.product)


  return (
    <Box sx={{ background: "linear-gradient(to bottom ,#0059b3, #ccf2ff,#ccf2ff)" }}>

      <img src={rhinevalley} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center" }} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Rhinevalleyitems.map((Rhinevalleyitem) => <Rhinechocolate key={Rhinevalleyitem.id} Rhinevalleyitem={Rhinevalleyitem} />)
        }
      </Container>

    </Box>
  )
}

export default RhineValley