import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import lindt from "../assets/poster/lindts.webp"

import { useSelector } from 'react-redux'
import Lindtchocolate from '../component/Lindtchocolate'

const Lindt = () => {
  const { Lindtitems } = useSelector(state => state.product)

  return (
    <Box sx={{ background: "linear-gradient(to bottom , #150905,#150905,#FFEAA7 )" }} >

      <img src={lindt} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center" }} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Lindtitems.map((Lindtitem) => <Lindtchocolate key={Lindtitem.id} Lindtitem={Lindtitem} />)

        }
      </Container>


    </Box>
  )
}

export default Lindt