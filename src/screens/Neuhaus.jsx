import { Box, Container } from '@mui/material'
import React from 'react'
import neuhaus from "../assets/poster/neuhaus.webp"

import { useSelector } from 'react-redux'
import Neuhauschocolate from '../component/Neuhauschocolate'

const Neuhaus = () => {
  const { Neuhausitems } = useSelector(state => state.product)
  return (
    <Box sx={{ background: "linear-gradient(to bottom ,#19334d,#19334d, #f5f9f9)" }} >

      <img src={neuhaus} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center" }} />


      <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          Neuhausitems.map((Neuhausitem) => <Neuhauschocolate key={Neuhausitem.id} Neuhausitem={Neuhausitem} />)
        }
      </Container>


    </Box>
  )
}

export default Neuhaus