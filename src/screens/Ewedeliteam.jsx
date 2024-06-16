import { Box, Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ewedel from "../assets/poster/Ewedel.webp"
import Ewedelchocolate from '../component/Ewedelchocolate'


const Ewedel = () => {

    const { Ewedelitems } = useSelector(state => state.product)
    return (

        <Box sx={{ background: " #00a3cc" }}>

            <img src={ewedel} alt="" style={{ width: "100%", height: "65vh", objectFit: "cover", backgroundPosition: "center", }} />

            <Container sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    Ewedelitems.map((Ewedelitem) => <Ewedelchocolate key={Ewedelitem.id} Ewedelitem={Ewedelitem} />)
                }
            </Container>

        </Box>
    )
}

export default Ewedel;