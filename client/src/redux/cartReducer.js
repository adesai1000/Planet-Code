import { createSlice } from '@reduxjs/toolkit';
import Popup from 'reactjs-popup';

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.products.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                window.alert('Item is already in your cart');
            } else {

                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state,action) => {
            state.products=state.products.filter(item=>item.id !== action.payload)
        },
        resetCart: (state, action) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
