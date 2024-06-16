import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'



const Product = () => {

    const { productItems, isLoading, isError } = useSelector((state) => state.product)

    // const dispatch =useDispatch()

    // useEffect(()=>{
    // dispatch(fetchproductItems())
    // },[])



    if (isLoading) {
        return (
            <Typography variant='h4' align='center'>
                Something went wrong...
            </Typography>
        )
    }
    if (isError) {
        return (
            <Typography variant='h4' align='center'>
                Something went wrong...
            </Typography>
        )
    };
    if (productItems.length === 0) {
        return (
            <Typography variant='h4' align='center'>
                No todos yet ...
            </Typography>
        )
    }
    return (

        <Box sx={{ background: "linear-gradient(to bottom ,#FAEAB1 , #994D1C)" }}>
            <CssBaseline>
                <Container>
                    <Box>
                        <Typography variant="" sx={{ fontSize: "55px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#A04120", padding: "30px" }}>
                            PRODUCTS
                        </Typography>

                        <Box sx={{
                            display: "flex ", flexWrap: 'wrap',
                            paddingBottom: "50px", gap: "20px",
                        }}>

                            {
                                productItems.map(productItem => <ProductCard key={productItem.id} productItem={productItem} />)
                            }

                        </Box>
                    </Box>
                </Container>
            </CssBaseline>
        </Box>

    )
}

export default Product  