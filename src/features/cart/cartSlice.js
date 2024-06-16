import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        Items: [

        ]
    },
    reducers: {
        //    add to cart
        add: (state, action) => {
            return {
                ...state,
                Items: [action.payload, ...state.Items],
            };
        },


        //remove from cart

        remove: (state, action) => {
            return {
                ...state,
                Items: state.Items.filter(Item => Item.id !== action.payload),
            };
        },

        //   increse and decrese
        decrese: (state, action) => {
            return {
                ...state,
                Items: state.Items.map((Item) => Item.id === action.payload)

            };
        },
        //   increse and decrese
        increse: (state, action) => {
            return {
                ...state,
                Items: state.Items.map((Item) => Item.id === action.payload)

            }
        }

    },
});

export const { add, remove, decrese, increse } = cartSlice.actions;
export default cartSlice.reducer;