import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import type1 from "../assets/VARITY/venchi.webp"
import type2 from "../assets/VARITY/RHINE VALLEY.webp"
import type3 from "../assets/VARITY/neuhaus.webp"
import type4 from "../assets/VARITY/lindt.webp"
import type5 from "../assets/VARITY/KITKAT.webp"
import type6 from "../assets/VARITY/E.wedal.webp"
import type7 from "../assets/VARITY/cadbury.webp"



const CardGroup = () => {



    return (

        <Box sx={{ background: "linear-gradient(to bottom ,white,#F8FDCF,#FAEAB1)", paddingBottom: "90px", paddingTop: "70px" }}>
            <Typography color='#A04120' variant='' sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "55px" }} >
                BRANDS
            </Typography>
            <Box sx={{ gap: "10px", flexWrap: "wrap", display: "flex", marginTop: "30px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                <Card sx={{ maxWidth: 350, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type1}

                        />

                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type2}

                        />

                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type3}

                        />

                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type4}

                        />

                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type5}

                        />
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type6}

                        />
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, border: "1px solid #A04120" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={type7}

                        />
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    )
}

export default CardGroup