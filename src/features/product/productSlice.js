// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        isSuccess: false,
        isError: false,
        isLoading: false,
        productItems: [

            {
                id: 1,
                price: 4750,
                title: "Neuhaus Collection Truffles Cocoa 180g  ",
                img: "https://cococart.in/cdn/shop/products/1CH1152_280x.png?v=1666948535"
                , Brand: "Neuhaus"
            },

            {
                id: 2,
                price: 899,
                title: "Venchi Dark Chocolate Hazelnut - 70% Sugar Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1871_1800x1800.png?v=1684220328"
                , Brand: "Venchi"
            },
            {
                id: 3,
                price: 245,
                title: "Whittaker's Dark Ghana 72% Bar 50g",
                img: "https://cococart.in/cdn/shop/products/Capture_a43909e4-0b66-4922-918a-1a56104a3212_1800x1800.jpg?v=1673608002"
                , Brand: "Whittaler"
            },

            {
                id: 4,
                price: 245,
                title: "Rhine Valley Christmas Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH2311_1800x1800.png?v=1703077024"
                , Brand: "Rhine Valley"
            },
            {
                id: 5,
                price: 199,
                title: "Kit Kat 4 Finger Bar 41.5g",
                img: "https://cococart.in/cdn/shop/products/kitkat-04_280x.png?v=1659949433"
                , Brand: "Kitkat"
            },
            {
                id: 6,
                price: 395,
                title: "Cadbury Flake 4-pack Pouch 80g",
                img: "https://cococart.in/cdn/shop/products/61a0PiMoL4L_1800x1800.jpg?v=1686291576"
                , Brand: "cadbury"
            },
            {
                id: 7,
                price: 495,
                title: "Wedel Dark Chocolate With Tiramisu Filling Bar 100g",
                img: "https://cococart.in/cdn/shop/products/306184948_520578420070543_7176130050925350940_n_1800x1800.jpg?v=1675768702"
                , Brand: "Ewedel"
            },
            {
                id: 8,
                price: 400,
                title: "Lindt Excellence 85% Cocoa Bar 100g",
                img: "https://cococart.in/cdn/shop/products/81brqBDG6IL._SL1500_540x.jpg?v=1676006704"
                , Brand: "Lindat"
            },
            {
                id: 9,
                price: 401,
                title: "Pick & Mix : Loose Lindor Surfin 100/250/500g",
                img: "https://cococart.in/cdn/shop/files/1CH1777_1800x1800.jpg?v=1693485233"
            },
            {
                id: 10,
                price: 950,
                title: "Pick & Mix : Venchi Chocoviar 75% 100/250g",
                img: "https://cococart.in/cdn/shop/files/1CH1954_720x.png?v=1684218409"
                , Brand: "Venchi"
            },
            {
                id: 11,
                price: 895,
                title: "Neuhaus Dark Raspberry 52% Cocoa Bar 100g",
                img: "https://cococart.in/cdn/shop/products/1CH0336_7a468e0b-1f9f-4343-8958-334e28f894e2_1800x1800.png?v=1659950469"
                , Brand: "Neuhaus"
            },
            {
                id: 12,
                price: 395,
                title: "Cadbury Dairy Milk Chocolate Bar 180g",
                img: "https://cococart.in/cdn/shop/products/1CH1644_1800x1800.png?v=1668520772"
                , Brand: "cadbury"
            },
            {
                id: 13,
                price: 395,
                title: "Rhine Valley Pistachio White Dragees 100g",
                img: "https://cococart.in/cdn/shop/files/1CH2068_1800x1800.png?v=1694063108"
                , Brand: "Rhine Valley"
            },
            {
                id: 14,
                price: 995,
                title: "Whittakers White Bar 250g",
                img: "https://cococart.in/cdn/shop/products/Whittaker_s-25_1800x1800.png?v=1659949366"
                , Brand: "Whittaler"
            },
            {
                id: 15,
                price: 1295,
                title: "Kit Kat Mini Moments Box 203g",
                img: "https://cococart.in/cdn/shop/products/1428337-04_1800x1800.jpg?v=1667285353"
                , Brand: "Kitkat"
            },
            {
                id: 16,
                price: 495,
                title: "Wedel Extra Milk Chocolate With Hazelnuts Bar 80g",
                img: "https://cococart.in/cdn/shop/products/1CH0868_540x.png?v=1659949398"
                , Brand: "Ewedel"
            },
            {
                id: 17,
                price: 899,
                title: "Venchi Dark Gianduia Hazelnut Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1876_280x.png?v=1684220794"
                , Brand: "Venchi"
            },
            {
                id: 18,
                price: 5990,
                title: "Neuhaus Milk Dark & White Collection 24pc 266g",
                img: "https://cococart.in/cdn/shop/products/1CH1149_280x.png?v=1659949015"
                , Brand: "Neuhaus"
            },
            {
                id: 19,
                price: 800,
                title: "Lindt Lindor Milk Cornet 200g",
                img: "https://cococart.in/cdn/shop/products/91xGZO1zc4L._SL1500_1800x1800.jpg?v=1676013564"
                , Brand: "Lindat"
            },
            {
                id: 20,
                price: 1995,
                title: "Rhine Valley Milk, Dark & White Assorted Collection 300g",
                img: "https://cococart.in/cdn/shop/files/1CH2022_1800x1800.png?v=1695730682"
                , Brand: "Rhine Valley"
            },
            {
                id: 21,
                price: 1895,
                title: "Cadbury Biscuits Nibbly Fingers Pouch 320g",
                img: "https://cococart.in/cdn/shop/products/fe18e22e-f0a3-4ed0-a2e7-3ca937dced83_1800x1800.jpg?v=1659950695"
                , Brand: "cadbury"

            },
            {
                id: 22,
                price: 895,
                title: "Neuhaus Milk 35% Cocoa 100g Bar",
                img: "https://cococart.in/cdn/shop/products/1CH0845_280x.png?v=1659949747"
                , Brand: "Neuhaus"
            },
            {
                id: 23,
                price: 995,
                title: "Whittaker's Coconut Mini Slabs 180g",
                img: "https://cococart.in/cdn/shop/products/41RhaGCHVtS_1800x1800.jpg?v=1673608204"
                , Brand: "Whittaler"
            },
            {
                id: 24,
                price: 1290,
                title: "Venchi Aromatic Chocolate Cigar 100g",
                img: "https://cococart.in/cdn/shop/files/1ch2184_2_1800x1800.png?v=1697456491"
                , Brand: "Venchi"
            },
            {
                id: 25,
                price: 100,
                title: "Wedel Ice Mint Hard Candies 90g",
                img: "https://cococart.in/cdn/shop/products/1CH0888_720x.png?v=1659949409"
                , Brand: "Ewedel"
            },
            {
                id: 26,
                price: 1185,
                title: "Cadbury Dairy Milk Wholenut Bag 300g",
                img: "https://cococart.in/cdn/shop/files/1CH2192_1800x1800.png?v=1697627954"
                , Brand: "cadbury"
            },
            {
                id: 27,
                price: 64995,
                title: "Venchi 54-Piece Chocolate Cigar Box 5kg",
                img: "https://cococart.in/cdn/shop/files/1ch2183_1800x1800.png?v=1697456282"
                , Brand: "Venchi"
            },
            {
                id: 28,
                price: 370,
                title: "Rhine Valley White Espresso 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1891_f0e5557b-3df1-4179-ae3a-fb9e111f1040_1800x1800.png?v=1695730642"
                , Brand: "Rhine Valley"
            },
            {
                id: 29,
                price: 800,
                title: "Lindt Lindor Assorted Cornet 200g",
                img: "https://cococart.in/cdn/shop/products/71xqIFDPkzS._SL1500_1800x1800.jpg?v=1676013144"
                , Brand: "Lindat"
            },
            {
                id: 30,
                price: 5999,
                title: "Neuhaus Smurfs Tin Box 253g",
                img: "https://cococart.in/cdn/shop/products/1CH0508_280x.png?v=1659950042"
                , Brand: "Neuhaus"
            },
            {
                id: 31,
                price: 100,
                title: "Wedel Fruit Drops Hard Candies 90g",
                img: "https://cococart.in/cdn/shop/products/1CH0886_1800x1800.jpg?v=1659949412"
                , Brand: "Ewedel"
            },
            {
                id: 32,
                price: 1895,
                title: "Rhine Valley Assorted Fresh Chocolate 310g + 210g FREE",
                img: "https://cococart.in/cdn/shop/files/1CH1972_1800x1800.jpg?v=1706100382"
                , Brand: "Rhine Valley"
            },
            {
                id: 33,
                price: 4595,
                title: "Venchi Mini Chocoviar Pralines Selection Large Gift 250g",
                img: "https://cococart.in/cdn/shop/files/1CH2176_1800x1800.png?v=1697454729"
                , Brand: "Venchi"
            },
            {
                id: 34,
                price: 425,
                title: "Whittaker's Milk Sante Multipack Bars 75g",
                img: "https://cococart.in/cdn/shop/products/1CH1708_41687b9c-b098-4379-bcd3-af72ca0f3794_1800x1800.png?v=1678094469"
                , Brand: "Whittaler"
            },
            {
                id: 35,
                price: 495,
                title: "Cadbury Caramel Nibbles Bag 120g",
                img: "https://cococart.in/cdn/shop/products/617hesXpQOL._AC_SL1280_1800x1800.jpg?v=1665745162"
                , Brand: "cadbury"
            },
            {
                id: 36,
                price: 2390,
                title: "Venchi Vintage Mini Book Gentleman with Assorted Chocoviar 116g",
                img: "https://cococart.in/cdn/shop/files/1CH1867_1800x1800.png?v=1684219317"
                , Brand: "Venchi"
            },
            {
                id: 37,
                price: 995,
                title: "Whittaker's Creamy Milk Mini Slabs 180g",
                img: "https://cococart.in/cdn/shop/products/Whittakers-Share-Pack-Mini-Slab-Creamy-Milk-2_1800x1800.jpg?v=1673528079"
                , Brand: "Whittaler"
            },
            {
                id: 38,
                price: 600,
                title: "Lindt Grand Hazelnut Milk Bar 150g",
                img: "https://cococart.in/cdn/shop/products/81mhEoah0-L._AC_SL1500_1800x1800.jpg?v=1676010265"
                , Brand: "Lindat"
            },
            {
                id: 39,
                price: 995,
                title: "Wedel Whole Hazelnut Milk Chocolate Praline Giftbox 108g",
                img: "https://cococart.in/cdn/shop/products/1CG0347_1800x1800.png?v=1664191797"
                , Brand: "Ewedel"
            },
            {
                id: 40,
                price: 895,
                title: "Neuhaus White Vanilla 100g Bar",
                img: "https://cococart.in/cdn/shop/products/1CH0847_1800x1800.png?v=1659949745"
                , Brand: "Neuhaus"
            },
            {
                id: 41,
                price: 895,
                title: "Kit Kat Minis 250g",
                img: "https://cococart.in/cdn/shop/products/Kitkat-250gm-15Xmini-01_3c493aff-05e6-4df2-902f-7bfa72990574_1800x1800.jpg?v=1659950735"
                , Brand: "Kitkat"
            },
            {
                id: 42,
                price: 1000,
                title: "Lindt Gold Tab Milk Chocolate 300g",
                img: "https://cococart.in/cdn/shop/products/81PjfqbntwL._SL1500_1800x1800.jpg?v=1675936429"
                , Brand: "Lindat"
            },
            {
                id: 43,
                price: 3450,
                title: "Rhine Valley Treasure Chest",
                img: "https://cococart.in/cdn/shop/files/1CG0599_f5db865b-ee78-41f5-88b5-e2ad2e8484e2_1800x1800.jpg?v=1704458019"
                , Brand: "Rhine Valley"
            },



        ],
        Kitkatitems: [
            {
                id: 41,
                price: 895,
                title: "Kit Kat Minis 250g",
                img: "https://cococart.in/cdn/shop/products/Kitkat-250gm-15Xmini-01_3c493aff-05e6-4df2-902f-7bfa72990574_1800x1800.jpg?v=1659950735"
                , Brand: "Kitkat"
            },
            {
                id: 5,
                price: 199,
                title: "Kit Kat 4 Finger Bar 41.5g",
                img: "https://cococart.in/cdn/shop/products/kitkat-04_280x.png?v=1659949433"
                , Brand: "Kitkat"
            },
            {
                id: 15,
                price: 1295,
                title: "Kit Kat Mini Moments Box 203g",
                img: "https://cococart.in/cdn/shop/products/1428337-04_1800x1800.jpg?v=1667285353"
                , Brand: "Kitkat"
            },
        ],
        Venchiitems: [
            {
                id: 36,
                price: 2390,
                title: "Venchi Vintage Mini Book Gentleman with Assorted Chocoviar 116g",
                img: "https://cococart.in/cdn/shop/files/1CH1867_1800x1800.png?v=1684219317"
                , Brand: "Venchi"
            },
            {
                id: 17,
                price: 899,
                title: "Venchi Dark Gianduia Hazelnut Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1876_280x.png?v=1684220794"
                , Brand: "Venchi"
            },
            {
                id: 33,
                price: 4595,
                title: "Venchi Mini Chocoviar Pralines Selection Large Gift 250g",
                img: "https://cococart.in/cdn/shop/files/1CH2176_1800x1800.png?v=1697454729"
                , Brand: "Venchi"
            },
            {
                id: 27,
                price: 64995,
                title: "Venchi 54-Piece Chocolate Cigar Box 5kg",
                img: "https://cococart.in/cdn/shop/files/1ch2183_1800x1800.png?v=1697456282"
                , Brand: "Venchi"
            },
            {
                id: 10,
                price: 950,
                title: "Pick & Mix : Venchi Chocoviar 75% 100/250g",
                img: "https://cococart.in/cdn/shop/files/1CH1954_720x.png?v=1684218409"
                , Brand: "Venchi"
            },
            {
                id: 24,
                price: 1290,
                title: "Venchi Aromatic Chocolate Cigar 100g",
                img: "https://cococart.in/cdn/shop/files/1ch2184_2_1800x1800.png?v=1697456491"
                , Brand: "Venchi"
            },
            {
                id: 2,
                price: 899,
                title: "Venchi Dark Chocolate Hazelnut - 70% Sugar Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1871_1800x1800.png?v=1684220328"
                , Brand: "Venchi"
            },
        ],
        Lindtitems: [
            {
                id: 42,
                price: 1000,
                title: "Lindt Gold Tab Milk Chocolate 300g",
                img: "https://cococart.in/cdn/shop/products/81PjfqbntwL._SL1500_1800x1800.jpg?v=1675936429"
                , Brand: "Lindat"
            },
            {
                id: 38,
                price: 600,
                title: "Lindt Grand Hazelnut Milk Bar 150g",
                img: "https://cococart.in/cdn/shop/products/81mhEoah0-L._AC_SL1500_1800x1800.jpg?v=1676010265"
                , Brand: "Lindat"
            },
            {
                id: 29,
                price: 800,
                title: "Lindt Lindor Assorted Cornet 200g",
                img: "https://cococart.in/cdn/shop/products/71xqIFDPkzS._SL1500_1800x1800.jpg?v=1676013144"
                , Brand: "Lindat"
            },
            {
                id: 19,
                price: 800,
                title: "Lindt Lindor Milk Cornet 200g",
                img: "https://cococart.in/cdn/shop/products/91xGZO1zc4L._SL1500_1800x1800.jpg?v=1676013564"
                , Brand: "Lindat"
            },
            {
                id: 8,
                price: 400,
                title: "Lindt Excellence 85% Cocoa Bar 100g",
                img: "https://cococart.in/cdn/shop/products/81brqBDG6IL._SL1500_540x.jpg?v=1676006704"
                , Brand: "Lindat"
            },
        ],
        Ewedelitems: [
            {
                id: 39,
                price: 995,
                title: "Wedel Whole Hazelnut Milk Chocolate Praline Giftbox 108g",
                img: "https://cococart.in/cdn/shop/products/1CG0347_1800x1800.png?v=1664191797"
                , Brand: "Ewedel"
            },
            {
                id: 31,
                price: 100,
                title: "Wedel Fruit Drops Hard Candies 90g",
                img: "https://cococart.in/cdn/shop/products/1CH0886_1800x1800.jpg?v=1659949412"
                , Brand: "Ewedel"
            },
            {
                id: 25,
                price: 100,
                title: "Wedel Ice Mint Hard Candies 90g",
                img: "https://cococart.in/cdn/shop/products/1CH0888_720x.png?v=1659949409"
                , Brand: "Ewedel"
            },
            {
                id: 16,
                price: 495,
                title: "Wedel Extra Milk Chocolate With Hazelnuts Bar 80g",
                img: "https://cococart.in/cdn/shop/products/1CH0868_540x.png?v=1659949398"
                , Brand: "Ewedel"
            },
            {
                id: 7,
                price: 495,
                title: "Wedel Dark Chocolate With Tiramisu Filling Bar 100g",
                img: "https://cococart.in/cdn/shop/products/306184948_520578420070543_7176130050925350940_n_1800x1800.jpg?v=1675768702"
                , Brand: "Ewedel"
            },
        ],
        Neuhausitems: [
            {
                id: 1,
                price: 4750,
                title: "Neuhaus Collection Truffles Cocoa 180g  ",
                img: "https://cococart.in/cdn/shop/products/1CH1152_280x.png?v=1666948535"
                , Brand: "Neuhaus"
            },
            {
                id: 11,
                price: 895,
                title: "Neuhaus Dark Raspberry 52% Cocoa Bar 100g",
                img: "https://cococart.in/cdn/shop/products/1CH0336_7a468e0b-1f9f-4343-8958-334e28f894e2_1800x1800.png?v=1659950469"
                , Brand: "Neuhaus"
            },
            {
                id: 18,
                price: 5990,
                title: "Neuhaus Milk Dark & White Collection 24pc 266g",
                img: "https://cococart.in/cdn/shop/products/1CH1149_280x.png?v=1659949015"
                , Brand: "Neuhaus"
            },
            {
                id: 22,
                price: 895,
                title: "Neuhaus Milk 35% Cocoa 100g Bar",
                img: "https://cococart.in/cdn/shop/products/1CH0845_280x.png?v=1659949747"
                , Brand: "Neuhaus"
            },
            {
                id: 30,
                price: 5999,
                title: "Neuhaus Smurfs Tin Box 253g",
                img: "https://cococart.in/cdn/shop/products/1CH0508_280x.png?v=1659950042"
                , Brand: "Neuhaus"
            },
            {
                id: 40,
                price: 895,
                title: "Neuhaus White Vanilla 100g Bar",
                img: "https://cococart.in/cdn/shop/products/1CH0847_1800x1800.png?v=1659949745"
                , Brand: "Neuhaus"
            },
        ],
        Rhinevalleyitems: [
            {
                id: 43,
                price: 3450,
                title: "Rhine Valley Treasure Chest",
                img: "https://cococart.in/cdn/shop/files/1CG0599_f5db865b-ee78-41f5-88b5-e2ad2e8484e2_1800x1800.jpg?v=1704458019"
                , Brand: "Rhine Valley"
            },
            {
                id: 32,
                price: 1895,
                title: "Rhine Valley Assorted Fresh Chocolate 310g + 210g FREE",
                img: "https://cococart.in/cdn/shop/files/1CH1972_1800x1800.jpg?v=1706100382"
                , Brand: "Rhine Valley"
            },
            {
                id: 28,
                price: 370,
                title: "Rhine Valley White Espresso 100g",
                img: "https://cococart.in/cdn/shop/files/1CH1891_f0e5557b-3df1-4179-ae3a-fb9e111f1040_1800x1800.png?v=1695730642"
                , Brand: "Rhine Valley"
            },
            {
                id: 20,
                price: 1995,
                title: "Rhine Valley Milk, Dark & White Assorted Collection 300g",
                img: "https://cococart.in/cdn/shop/files/1CH2022_1800x1800.png?v=1695730682"
                , Brand: "Rhine Valley"
            },
            {
                id: 13,
                price: 395,
                title: "Rhine Valley Pistachio White Dragees 100g",
                img: "https://cococart.in/cdn/shop/files/1CH2068_1800x1800.png?v=1694063108"
                , Brand: "Rhine Valley"
            },
            {
                id: 4,
                price: 245,
                title: "Rhine Valley Christmas Bar 100g",
                img: "https://cococart.in/cdn/shop/files/1CH2311_1800x1800.png?v=1703077024"
                , Brand: "Rhine Valley"
            },
        ],
        Cadburyitems: [
            {
                id: 12,
                price: 395,
                title: "Cadbury Dairy Milk Chocolate Bar 180g",
                img: "https://cococart.in/cdn/shop/products/1CH1644_1800x1800.png?v=1668520772"
                , Brand: "cadbury"
            },
            {
                id: 35,
                price: 495,
                title: "Cadbury Caramel Nibbles Bag 120g",
                img: "https://cococart.in/cdn/shop/products/617hesXpQOL._AC_SL1280_1800x1800.jpg?v=1665745162"
                , Brand: "cadbury"
            },
            {
                id: 6,
                price: 395,
                title: "Cadbury Flake 4-pack Pouch 80g",
                img: "https://cococart.in/cdn/shop/products/61a0PiMoL4L_1800x1800.jpg?v=1686291576"
                , Brand: "cadbury"
            },
            {
                id: 26,
                price: 1185,
                title: "Cadbury Dairy Milk Wholenut Bag 300g",
                img: "https://cococart.in/cdn/shop/files/1CH2192_1800x1800.png?v=1697627954"
                , Brand: "cadbury"
            },
            {
                id: 21,
                price: 1895,
                title: "Cadbury Biscuits Nibbly Fingers Pouch 320g",
                img: "https://cococart.in/cdn/shop/products/fe18e22e-f0a3-4ed0-a2e7-3ca937dced83_1800x1800.jpg?v=1659950695"
                , Brand: "cadbury"

            },
        ],
        Whittaleritems: [
            {
                id: 3,
                price: 245,
                title: "Whittaker's Dark Ghana 72% Bar 50g",
                img: "https://cococart.in/cdn/shop/products/Capture_a43909e4-0b66-4922-918a-1a56104a3212_1800x1800.jpg?v=1673608002"
                , Brand: "Whittaler"
            },
            {
                id: 7,
                price: 495,
                title: "Wedel Dark Chocolate With Tiramisu Filling Bar 100g",
                img: "https://cococart.in/cdn/shop/products/306184948_520578420070543_7176130050925350940_n_1800x1800.jpg?v=1675768702"
                , Brand: "Ewedel"
            },
            {
                id: 9,
                price: 401,
                title: "Pick & Mix : Loose Lindor Surfin 100/250/500g",
                img: "https://cococart.in/cdn/shop/files/1CH1777_1800x1800.jpg?v=1693485233"
            },
            {
                id: 23,
                price: 995,
                title: "Whittaker's Coconut Mini Slabs 180g",
                img: "https://cococart.in/cdn/shop/products/41RhaGCHVtS_1800x1800.jpg?v=1673608204"
                , Brand: "Whittaler"
            },
            {
                id: 14,
                price: 995,
                title: "Whittakers White Bar 250g",
                img: "https://cococart.in/cdn/shop/products/Whittaker_s-25_1800x1800.png?v=1659949366"
                , Brand: "Whittaler"
            },
            {
                id: 34,
                price: 425,
                title: "Whittaker's Milk Sante Multipack Bars 75g",
                img: "https://cococart.in/cdn/shop/products/1CH1708_41687b9c-b098-4379-bcd3-af72ca0f3794_1800x1800.png?v=1678094469"
                , Brand: "Whittaler"
            },
            {
                id: 37,
                price: 995,
                title: "Whittaker's Creamy Milk Mini Slabs 180g",
                img: "https://cococart.in/cdn/shop/products/Whittakers-Share-Pack-Mini-Slab-Creamy-Milk-2_1800x1800.jpg?v=1673528079"
                , Brand: "Whittaler"
            },
        ]

    },
    reducers: {

    },
    extraReducers: builder => {

    }
})

export default productSlice.reducer

//

// export const fetchproductItems = createAsyncThunk("FETCH/PRODUCTS", async () => {
//     const response =await fetch('http://localhost:5173/productItems')
//     const data= (await response.json())
//     console.log(data);
// })