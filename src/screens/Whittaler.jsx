import { Box, Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import whittal from "../assets/poster/Whittakers.webp"
import Whittalerchocolate from '../component/Whittalerchocolate'

const Whittaker = () => {

    const { Whittaleritems } = useSelector(state => state.product)
    return (
        <Box sx={{ background: "linear-gradient(to bottom,#B06161,#76453B ,#B19470,#B19470  )" }} >

            <img src={whittal} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center", }} />
            <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    Whittaleritems.map((Whittaleritem) => <Whittalerchocolate key={Whittaleritem.id} Whittaleritem={Whittaleritem} />)
                }
            </Container>
        </Box>
    )
}

export default Whittaker